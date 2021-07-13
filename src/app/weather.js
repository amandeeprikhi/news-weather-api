const weatherConfig = require('../../config/weather')
const config = require('../../config/config')
const dateUtil = require('../utilities/dateUtils')

let getWeather = async function getWeather() {
    let responseData = {}
    try {
        const response = await config.axios.get('https://api.openweathermap.org/data/2.5/onecall', {
            params: weatherConfig.weatherParams
        })
        let weatherAPIResponse = {}
        weatherAPIResponse["unit"] = weatherConfig.weatherParams.units
        weatherAPIResponse["location"] = "Faridabad"      //hardcoding the city name
        responseData["status"] = response.status
        weatherAPIResponse["data"] = []
        for(let i = 0; i < 5; i++){         //iterating over the data items
            let dataItem = response.data.daily[i]
            let dataObject = {}
            dataObject["date"] = dateUtil.unixDateToHumanDate(dataItem.dt)
            dataObject["temp"] = dataItem.temp.day
            dataObject["main"] = dataItem.weather[0].main
            weatherAPIResponse["data"].push(dataObject)
        }
        weatherAPIResponse["count"] = weatherAPIResponse["data"].length
        responseData.data = weatherAPIResponse
        return responseData
    } catch (error) {
        console.log(error)
        if (error.response == undefined) {
            responseData["status"] = 500
            responseData["data"] = {"message" : "Internal Server Error."}
        }
        else {
            responseData["status"] = error.response.status
            responseData["data"] = error.response.data
        }
        return responseData
    }
}

module.exports = {
    getWeather: getWeather
}