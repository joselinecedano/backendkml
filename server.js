// DEPENDENCIES
require('dotenv').config() // *get .env variables
const { PORT } = process.env // *pull port from .env
const express = require('express') // *import express
const app = express() // *create application object
const cors = require('cors') // *import cors middleware

// MIDDLEWARE 
app.use(cors()); // *to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // *parse json bodies

// ROUTES
const routes = require('./routes/index.js')
app.use('/', routes) // *check the routes/index.js for ALL routes


// !catch route if it doesn't match to anything send this response!
app.use((req, res) => {res.status(404).json({message: "Not a proper route - 404 Error"})})

// LISTENER
app.listen(PORT, () => console.log(`Listening to Kiss My Lashesz on PORT ${PORT}`))