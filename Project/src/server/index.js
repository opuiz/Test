//stuff to hide original key so that nobody can use it in public
const dotenv = require('dotenv');
dotenv.config();

//required libraries
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
//const mockAPIResponse = require('./mockAPI.js')
//const fetch = require('node-fetch');
import fetch from 'node-fetch';
//onst fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//Start the app as an instance
const app = express()


//useage of packages
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

//API setup like in script
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY


let userEnteredURL = []; 
//post rout set up
app.post('/api', async (req, res) => {
    // reading URL from form
    userEnteredURL = req.body.url;
    // build up of URL
    const apiURL = `${baseURL}key=${apiKey}&url=${userEnteredURL}&lang=en`
    console.log('foobar' + apiURL)
    
    const fetchedFromAPI = await fetch(apiURL )
    // format data into json
    .then((response) => response.json())
    .then((data) => {
        res.send(data)
    })
    }
)

const port = 8000;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})

