'use strict';

// **** REQUIRE **** //

// Brings in Express //
const express = require('express');
const cors = require('cors');
const data = require('./data/weather.json');

// Brings in environment variables from the .env file //
require('dotenv').config();

// The app is going to be the actual server - need to call the express to create the server //
const app = express();

// Middleware //

// Allow anyone to hit our server like a body / security guard //
app.use(cors());

// Defines the port that it needs to live on for the time being //
const PORT = process.env.PORT || 3002;

// Listens to the port and have it listen on that port //
app.listen(PORT, () => console.log(`We are up on port ${PORT}`));

// Endpoints -- proof of life and catchalls //

// Home endpoint
app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server!');
});

app.get('/weather', (request, response, next) => {
  try {
    const searchQuery = request.query.searchQuery;
    const lat = parseFloat(request.query.lat);
    const lon = parseFloat(request.query.lon);

    const foundWeather = data.find(city => city.city_name.toLowerCase() === searchQuery.toLowerCase());

    // Instantiate an array to hold the forecast objects
    const forecasts = [];

    foundWeather.data.forEach(dayData => {
      const forecast = new Forecast(dayData);
      forecasts.push(forecast);
    });

    response.status(200).json(forecasts);
  } catch (error) {
    next(error);
  }
});

class Forecast {
  constructor(dayData) {
    this.date = dayData.datetime;
    this.description = dayData.weather.description;
  }
}

app.get('/hello', (request, response) => {
  const firstName = request.query.firstName;
  const lastName = request.query.lastName;

  console.log(request.query);

  response.status(200).send(`Hello ${firstName} ${lastName}, welcome to my server!`);
});

// Endpoint catch-all wildcard handling
app.get('*', (request, response) => {
  response.status(404).send('This page does not exist.');
});

// Error handling
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
