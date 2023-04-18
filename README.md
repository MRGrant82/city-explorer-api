# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
This is a backend API for the City Explorer application that provides weather forecast data for a searched city. The application receives a GET request containing latitude, longitude, and search query information, and returns an array of weather forecast objects for the specified city.

## Getting Started
To run this application locally, you will need to follow these steps:

Clone the city-explorer-api repository to your local machine and navigate to the project directory.
Run npm install to install the required dependencies.
Create a .env file in the root directory of the project and set a value for the PORT variable.
Copy the contents of weather.json and paste it into a new file data/weather.json in the project directory.
Run npm start to start the server.

## Architecture
This application is built using Node.js and the Express framework. It also uses the dotenv package to load environment variables from the .env file and the cors package to enable Cross-Origin Resource Sharing (CORS) for the API. The data is stored in a static weather.json file, which is read using the fs (file system) module.

When a GET request is received at the /weather endpoint, the server reads the weather.json file to find the city that matches the provided latitude, longitude, or search query. If the city is found, an array of forecast objects is created using the forecast data for that city. If the city is not found, an error response is sent.

## Change Log
04-18-2023 5:30pm - Created a new repo called city-explorer-api on GitHub, initialized with a README file.

## Credit and Collaborations
Michael Grant

Name of feature: Lab 7

Estimate of time needed to complete: 5 hours

Start time: 3pm EST

Finish time: _____

Actual time needed to complete: _____


-------Whiteboard-------

1. Create a new GitHub repository called `city-explorer-api`, clone it locally, and create a feature branch off of `main`.
2. Run `npm init` to create a new project, install `express`, `dotenv`, and `cors`, and create a `.gitignore` and `.eslintrc.json`.
3. Add the remaining files identified in the folder tree above, including `weather.json`, and set the contents of `.env` to set a value for `PORT`.
4. Create an Express server that reads the weather data from `weather.json`.
5. Create an API endpoint of `/weather` that processes a GET request containing latitude, longitude, and searchQuery information, and uses the `.find()` method to find which city the search data belongs to.
6. If the user did not search for one of the three cities with information available, return an error.
7. Create a class for `Forecast`, with properties of `date` and `description`, and use the static data of the city the user searched to create an array of `Forecast` objects, one for each day.
8. Send the full array back to the client who requested data from the `/weather` endpoint.
9. Create a `Weather` component to render forecast data to the page when a city search successfully returns lat and lon info, show the `Weather` component, populated with the server data when the server returns the array of forecast data, and use appropriate Bootstrap components to nicely display the forecast data.
10. Create a function to handle errors from any API call, and send a status of 500 along with an error message to the client. Add clear error messages if something goes wrong so that users know if they need to make any changes or try again in a different manner.
