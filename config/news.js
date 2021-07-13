require('dotenv').config()
const newsKey = process.env.NEWS_KEY
const newsCountry = process.env.NEWS_COUNTRY != null ? "in" : process.env.NEWS_COUNTRY

let headlineParams = {
    country: newsCountry,
    apiKey: newsKey
}

let queryParams = {

}

module.exports = {
    headlineParams: headlineParams,
    queryParams: queryParams
}