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