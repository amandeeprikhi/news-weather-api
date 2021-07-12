const weatherConfig = require('./config/weather')

require('dotenv').config()
const axios = require('axios');
const express = require('express')
const app = express()
const port = process.env.PORT != null ? process.env.PORT : 3000

 
app.get('/', function (req, res) {
  getWeather();
  let unix_timestamp = 1626071400
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  console.log(date.toDateString());
  res.send('Welcome to the news and weather API')
})
 
app.listen(port, () =>{
    console.log('The server is running at port',port)
})

async function getWeather() {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
      params:weatherConfig.weatherParams
    })
    console.log(response)
  } catch (error) {
    console.log('inside catch')
    console.error(error)
  }
}