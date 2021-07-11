require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT != null ? process.env.PORT : 3000 
 
app.get('/', function (req, res) {
  res.send('Welcome to the news and weather API')
})
 
app.listen(port, () =>{
    console.log("The server is running at port",port)
})