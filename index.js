const weatherData = require('./src/app/weather')

require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT != null ? process.env.PORT : 3000

 
app.get('/', async function (req, res) {
  res.send('Welcome to the news and weather API')
})

app.get('/weather', async function (req, res) {
  let responseData = await weatherData.getWeather();
  res.status(responseData.status).send(responseData.data)
})
 
app.listen(port, () =>{
    console.log('The server is running at port',port)
})
