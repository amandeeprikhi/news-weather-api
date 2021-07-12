require('dotenv').config()
const weatherKey = process.env.WEATHER_KEY

let weatherParams = {
    lat: "28.4089",
    lon: "77.317",
    exclude: "hourly,minutely,alerts,current"
}

module.exports = {
    weatherParams : weatherParams
}