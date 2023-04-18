'use strict';

// **** REQUIRE **** //
// Brings in Express //
const express = require('express');
require('dotenv').config();
const cors = require('cors');


// The app is going to be the actual server - need to call the express to create the server //
// Turns on express //
const app = express();

// give port another option as well //
// Defines the port that it needs to live on for the time being //
const PORT = process.env.PORT || 3002;

// listens to the
// have it listen on that port //
app.listen(PORT, () => console.log('We are up on port ${PORT}'));