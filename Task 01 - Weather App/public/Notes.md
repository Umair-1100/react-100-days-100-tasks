✅ Task 01 — Weather Dashboard Assignment (Frontend Developer Assessment)
Objective

Build a fully functional Weather Dashboard using React.
The goal is to evaluate your skills in component architecture, API integration, state management, error handling, and UI execution.

📌 Task Requirements
1. City Weather Search

Implement an input field where the user can enter a city name.

On city search, fetch real-time weather data using:
API: https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid=YOUR_KEY

Display the fetched weather details in a clean UI card.

2. Auto-Refresh (Every 30 Seconds)

Weather data must automatically refresh every 30 seconds.

Ensure the interval is properly cleaned up using the React useEffect cleanup function.

3. Display the Following Information

Your UI must show:

City Name

Temperature

Weather Condition (e.g., Clear, Clouds, Rain)

Weather Icon

Humidity

Wind Speed

Last Updated Time (Example: “Last updated: 03:14 PM”)

4. Input Optimization

Implement 500ms debounce on the input field to avoid excessive API calls.

Avoid API call until the user stops typing.

5. Error + Loading States

Show a loading indicator during API calls.

If a wrong city is entered, show a friendly error message:

“City not found. Please try again.”

6. Local Storage Requirement

Save the last searched city in localStorage.

On page reload, automatically load that city’s weather.

7. Bonus Requirements

These are optional but recommended:

Light/Dark Theme Toggle

Smooth component fade-in animations

Responsive layout for mobile & desktop

Clean UI with subtle shadows and spacing


🚀 Deliverables

Public GitHub Repository

Clean commit messages

README.md must include:

Project description

How to run

Features

Screenshots

Demo GIF (optional)

⏳ Time Limit

24 hours from the moment you receive this task.

🎯 Evaluation Criteria

Clean, modular, maintainable code

Proper usage of React hooks

UI/UX quality

Code readability

Error handling

Performance (debounce + cleanup)

Folder structure