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

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown





def gCalRetrieval():
    urL='https://www.google.com'
    chrome_path="C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    webbrowser.register('chrome', None,webbrowser.BackgroundBrowser(chrome_path))
    webbrowser.get('chrome').open_new_tab(urL)

    #google calendar connect
    pp = pprint.PrettyPrinter(indent=2)


    # The CLIENT_SECRETS_FILE variable specifies the name of a file that contains
    # the OAuth 2.0 information for this application, including its client_id and
    # client_secret.
    CLIENT_SECRETS_FILE = "credentials.json"


    # This access scope grants read-only access to the authenticated user's Drive
    # account.
    SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
    API_SERVICE_NAME = 'calendar'
    API_VERSION = 'v3'


    flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
    credentials = flow.run_local_server(port=10004)
    return build(API_SERVICE_NAME, API_VERSION, credentials = credentials)


    # def list_drive_files(service, **kwargs):
    #     results = service.files().list(
    #         **kwargs
    #     ).execute()


    # pp.pprint(results)


def getEvents():
    # When running locally, disable OAuthlib's HTTPs verification. When
    # running in production *do not* leave this option enabled.
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    service = gCalRetrieval()
    # list_drive_files(service,
    #                  orderBy='modifiedByMeTime desc',
    #                  pageSize=5)

    return service
    



def setupDayEvents(service):
    currentDay = datetime.datetime.utcnow()
    currentDay = currentDay - datetime.timedelta(days=4)
    currentDay = currentDay.isoformat() + "Z"

    nextDay = datetime.datetime.utcnow()
    nextDay = nextDay - datetime.timedelta(days=3)
    nextDay = nextDay.isoformat() + "Z"

    print(currentDay)
    print(nextDay)
    eventDict = service.events().list(calendarId='primary', orderBy='startTime', singleEvents=True, timeMin=currentDay, timeMax=nextDay).execute()
    return eventDict

def processDict(eventDict):
    schedule = {}

    # date = eventDict['items'][0]["start"]["dateTime"]
    # formatted_date = datetime.datetime.strftime(date, "%m-%d-%Y")
    # print(formatted_date)


    for i in eventDict['items']:

        start = i["start"]["dateTime"]
        startNow = datetime.datetime.strptime(start, '%Y-%m-%dT%H:%M:%S%z').time()
        startNowFormat = startNow.strftime("%I:%M %p")


        end = i["end"]["dateTime"]
        endNow = datetime.datetime.strptime(end, '%Y-%m-%dT%H:%M:%S%z').time()
        endNowFormat = endNow.strftime("%I:%M %p")

        schedule[i['summary']] = [startNowFormat, endNowFormat]
    return schedule

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

    response = model.generate_content(f'''Here is my schedule {schedule}. You are a bot that takes in this schedule. Do not change the time of any of the events. Add new events that would help with an employee's mental health and reduce stress. Make sure the new events do not conflict in time with the old events. Below, give the updated schedule in a table, sorted by start time, and DO NOT WRITE ANYTHING ELSE.''')


    geminiResponse = to_markdown(response.text)
    display({'text/plain': geminiResponse,
         'text/markdown': geminiResponse},
        raw=True)
    return response.text



def main():
    events = getEvents()
    eventDict = setupDayEvents(events)
    sched = processDict(eventDict)
    return runGemini(sched)

# main()

