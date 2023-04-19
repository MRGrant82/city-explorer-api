'use strict';

// **** REQUIRE **** //
// Brings in Express //
const express = require('express');
require('dotenv').config();
const cors = require('cors');
let data = require('./data/weather.json')


// The app is going to be the actual server - need to call the express to create the server //
// Turns on express //
const app = express();


// She called it the Middleware //

// allow anyone to hit our server  like a body / security guard//

app.use(cors());


// give port another option as well //
// Defines the port that it needs to live on for the time being //
const PORT = process.env.PORT || 3002;

// listens to the
// have it listen on that port //
app.listen(PORT, () => console.log(`We are up on port ${PORT}`));



// Endpoints -- proof of life and catchalls //

// 1st argument is endpoint url as a string ( home endpoint)
// 2nd argument is a callback which will execute when an endpoint is hit
// 2 parameters, the request and response 
app.get('/', (request, response) =>{
    response.status(200).send('Welcome to my server!'); // Close else it will spool forever  


    app.get('/weather', (request, response, next) => {
        try {
            let queriedWeather = request.query.weather;
            let searchQuery = request.query;
            let forecastData = cityData.data.map(day => new forecastData(day));
            response.send(forecastData);
        } catch (error) {
            next(error);
        }
});


class Forecast {
    constructor(dayData)
 {
    this.date = dayData.date;
    this.description = dayData.description;
 }
}

app.get('/hello', (request, response) =>{
    let firstName = request.query.firstName;
    let lastName = request.query.lastName;

    console.log(request.query);

    response.status(200).send(`Hello ${firstName} ${lastName}, welcome to my server!`);
});


// Tested and works.  Endpoint catchall wildcard handling
app.get('*', (request, response) =>{
    response.status(404).send('This page does not exist.')

});


// Plug and play code from express docs for error handling

app.use((error, request, response, next) => {
    console.log(error.message);
    response.status(500).send(error.message);
});


