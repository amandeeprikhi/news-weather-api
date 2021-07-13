require('dotenv').config()
const weatherKey = process.env.WEATHER_KEY
const weatherUnits = process.env.WEATHER_UNIT != null ? "metric" : process.env.WEATHER_UNIT

let weatherParams = {
    lat: "28.4089",
    lon: "77.317",
    exclude: "hourly,minutely,alerts,current",
    appid : weatherKey,
    units: weatherUnits
}

module.exports = {
    weatherParams : weatherParams
}