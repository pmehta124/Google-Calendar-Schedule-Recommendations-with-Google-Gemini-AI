# %% [markdown]
# # Google Calendar Retrieval
import webbrowser
# pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib


#google calendar
import os
import pprint


import google.oauth2.credentials


from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google_auth_oauthlib.flow import InstalledAppFlow

#Gemini
import datetime
from datetime import time
from datetime import timedelta
# !pip install -q -U google-generativeai
import pathlib
import textwrap

import re
import json



import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown





def gCalRetrieval():
    urL='https://www.google.com'
    chrome_path="C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    webbrowser.register('chrome', None,webbrowser.BackgroundBrowser(chrome_path))
    webbrowser.get('chrome').open_new_tab(urL)

    pp = pprint.PrettyPrinter(indent=2)

    CLIENT_SECRETS_FILE = "credentials.json"

    SCOPES = ['https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/calendar']
    API_SERVICE_NAME = 'calendar'
    API_VERSION = 'v3'


    flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
    credentials = flow.run_local_server(port=10004)
    return build(API_SERVICE_NAME, API_VERSION, credentials = credentials)


def getEvents():
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    service = gCalRetrieval()

    return service
    



def setupDayEvents(service):
    currentDay = datetime.datetime.utcnow()
    currentDay = currentDay - datetime.timedelta(days=3)
    currentDay = currentDay.isoformat() + "Z"

    nextDay = datetime.datetime.utcnow()
    nextDay = nextDay - datetime.timedelta(days=2)
    nextDay = nextDay.isoformat() + "Z"

    eventDict = service.events().list(calendarId='primary', orderBy='startTime', singleEvents=True, timeMin=currentDay, timeMax=nextDay).execute()
    return eventDict

def processDict(eventDict):
    schedule = {}

    todayDate = datetime.datetime.fromisoformat(eventDict['items'][0]['start']['dateTime']).date()

    for i in eventDict['items']:

        start = i["start"]["dateTime"]
        startNow = datetime.datetime.strptime(start, '%Y-%m-%dT%H:%M:%S%z').time()
        startNowFormat = startNow.strftime("%I:%M %p")


        end = i["end"]["dateTime"]
        endNow = datetime.datetime.strptime(end, '%Y-%m-%dT%H:%M:%S%z').time()
        endNowFormat = endNow.strftime("%I:%M %p")

        schedule[i['summary']] = [startNowFormat, endNowFormat]
    return schedule, todayDate

def runGemini(sDict):
    schedule = sDict


    def to_markdown(text):
        text = text.replace('•', '  *')
        return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

    genai.configure(api_key="AIzaSyD4HW-6nwpKi1nlFmlZyJa56HJ4WmWLY-8")

    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(m.name)

    model = genai.GenerativeModel('gemini-pro')

    response = model.generate_content(f'''Here is my schedule {schedule}. You are a bot that takes in this schedule. Do not change the time of any of the events. Add new events that would help with an employee's mental health and reduce stress. Make sure the new events do not conflict in time with the old events. Below, give only the NEW activities added in a table, sorted by start time, and DO NOT WRITE ANYTHING ELSE. Format the table heading EXACTLY Like this: | Event | Start Time | End Time | |---|---|---|''')


    geminiResponse = to_markdown(response.text)
    display({'text/plain': geminiResponse,
         'text/markdown': geminiResponse},
        raw=True)
    return response.text


def tryThis(eventsList): 
    service = getEvents()
    
    eventWhole = eventsList

    print("PASSING IN EVENT\n", eventWhole)
    print("EVENTS LIST\n", eventsList)
    for i in eventWhole:
        event = service.events().insert(calendarId='primary', body=i).execute()
    return event.get('htmlLink')

def extractClasses(response, todayDate): 
    print(response)
    response = response[48:]

    pattern = r'\|([^|]+)\|([^|]+)\|([^|]+)\|'
    matches = re.findall(pattern, response)
    events_list = []
    for match in matches:
        event_name = match[0].strip()
        start_time_str = match[1].strip()
        end_time_str = match[2].strip()
        start_time = datetime.datetime.combine(todayDate, datetime.datetime.strptime(start_time_str, "%I:%M %p").time())
        end_time = datetime.datetime.combine(todayDate, datetime.datetime.strptime(end_time_str, "%I:%M %p").time())
        event_info = {
            "summary": event_name,
            "start": {"dateTime": start_time.isoformat(), "timeZone": 'America/Los_Angeles'},
            "end": {"dateTime": end_time.isoformat(), "timeZone": 'America/Los_Angeles'}
        }
        events_list.append(event_info)
    print(events_list)

    return events_list



def main():
    events = getEvents()
    eventDict = setupDayEvents(events)
    sched, todayDate = processDict(eventDict)
    response = runGemini(sched)
    eventsList = extractClasses(response, todayDate)
    return tryThis(eventsList)