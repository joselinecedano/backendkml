// DEPENDENCIES
require('dotenv').config() //get .env variables
const { PORT } = process.env //pull port from .env
const express = require('express') //import express
const app = express() // create application object
const cors = require('cors') // import cors middleware

// MIDDLEWARE 
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies

// ROUTES
//test route
app.get('/', (req,res)=>{
    res.send('Welcome to Kiss My Lashesz!')
})


// ** catch route if it doesnt match to anything send this response  **
app.use((req, res) => {res.status(404).json({message: "Not a proper route- 404 Error"})})

// LISTENER
app.listen(PORT, () => console.log(`Listening to KML on PORT ${PORT}`))