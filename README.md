# Break Balance
**Elevating Wellness with AI-Powered Mental Breaks & Mood-Boosting Music!**

Check out our demo on YouTube! https://youtu.be/reFzH8RXSKs

### Home Page
<img src="https://github.com/pmehta124/relax/blob/main/WellnessAI%20Home.png" height =300 width="600" />

### Song Recommendation
<img src="https://github.com/pmehta124/relax/blob/main/WellnessAI%20Song.png" height =300 width="500" />

### Schedule Wellness Activities
<img src="https://github.com/pmehta124/relax/blob/main/WellnessAI%20Schedule.png" height =300 width="600" />

## Inspiration
Our inspiration for Break Balance stemmed from the growing amounts of stress and mental health pressures in recent years. As college students balancing classes, clubs, part-time jobs, and internships, we know the importance of scheduling personal time into our daily schedules. And working full-time is a whole different story! Our team wanted to create a solution that leverages AI to promote well-being by incorporating breaks and mood-boosting elements into employees’ work routines. Our goal was to create a website where employees can automatically insert well-being activities into their calendars using AI, based on when they like to wake up/sleep, their preferences, their mood today, and what the weather is today. In addition, we wanted to add song or meme suggestions based on the user’s mood. While we were not able to implement the entirety of this vision, we attempted to implement the core of the product. 

## What It Does
First, Break Balance connects to a user’s Google calendar using the Google Calendar API. Then, the website extracts the events the user has for the day, which are then connected with the Google Gemini API. We then instruct Gemini to create a specific, personalized schedule that will add breaks, lunch or dinner times, and other mental well-being suggestions. We then extract the new events and use the Calendar API again to write the new events into the employee’s Calendar automatically. 

## How we built it
We built Break Balance using a combination of Python, React, and Flask. The backend logic and AI algorithms were implemented in Python. The frontend interface was developed using React. Flask was utilized to create the API endpoints for communication between the frontend and backend components. Integration with Google Calendar API and Gemini AI API was crucial for accessing scheduling data and scheduling those events back into a user’s Google Calendar.

## Challenges we ran into
The first, and largest challenge we had was connecting with the Google Calendar API and be able to gain authorization for access to the calendars. This was a non-intuitive process, and took a large portion of our time. Another significant challenge was tuning the correct prompts for Gemini to be able to create a new schedule in a readable format, and in a repeatable format. Gemini would often misinterpret our prompts, give the new schedule and variously different formats every time, or sometimes refuse to make a new schedule. In addition, we had a hard time connecting the frontend inputs to the backend in order to take in the users and preferences into consideration. Due to the lack of time, we ended up not implementing taking in the user’s musical preferences and mood, but we were able to fully implement adding new activities to the user’s calendar.

## Accomplishments that we’re proud of
We’re proud to have developed a functional prototype of Break Balance that utilizes Gemini and Google Calendar APIs to successfully input events into a user’s Google Calendar schedule! Most of this project was really new to the team, so it was an incredible experience to get to overcome all of the technical challenges and create a user-friendly interface. We’re really proud of being able to connect with the new API’s, work with React and Flask (which we hadn’t before), and learn how to tune prompts for Gemini.

## What we learned
Throughout the development process, our team was exposed to a ton of new implementation techniques and coding languages. Primarily, we learned about the intricacies of API integration – how to establish connections with APIs, effectively utilize their functionalities, and handle responses to ensure smooth data flow within our application. We also deepened our understanding of creating React and Flask web applications and tweaking UI elements to create an intuitive experience for the user. The overall experience enhanced our technical skills as well as our knowledge of how different technologies operate through APIs.

## What’s next for Break Balance
In the future, we would like to refine Break Balance’s capabilities further by using AI algorithms to provide a wider variety of personalized recommendations. This includes implementing the current “Song Recommendation” feature on the website, along with some other tools such as generating memes to boost a user’s mood or recommending a book to read!  One significant addition to our roadmap is implementing login authorization functionality, enabling companies to track employees' overall wellness metrics. This feature will provide valuable insights into the collective well-being of the workforce, allowing organizations to identify trends, assess areas for improvement, and tailor wellness initiatives accordingly. Ultimately, we envision Break Balance as a comprehensive tool for promoting mental health and wellness in our digital age.

