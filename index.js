const weatherData = require('./src/app/weather')
const user = require('./src/app/user')

const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT != null ? process.env.PORT : 3000

app.get('/', async function (req, res) {
  res.send('Welcome to the news and weather API')
})

app.get('/weather', async function (req, res) {
  let responseData = await weatherData.getWeather()
  res.status(responseData.status).send(responseData.data)
})

app.post('/login', async function (req, res) {
  let responseData = await user.login(req.body)
  res.status(responseData.status).send(responseData.data)
})

app.post('/signup', async function (req, res) {
  let responseData = await user.signup(req.body)
  res.status(responseData.status).send(responseData.data)
})

app.post('/logout', async function (req, res) {
  res.status(200).send({"message":"Logged out successfully."})
})

app.listen(port, () => {
  console.log('The server is running at port', port)
})


