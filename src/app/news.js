const jwt = require('../utilities/jwtUtils')
const config = require('../../config/config')
const newsConfig = require('../../config/news')

let fetchNews = async function (token, query) {
    let responseData = {}
    if (token == null) {
        responseData["status"] = 400
        responseData["data"] = { "message": "Please log-in with a valid user." }
        return responseData
    }
    let tokenValid = jwt.verifyJWT(token)
    if (tokenValid == 401) {
        responseData["status"] = 401
        responseData["data"] = { "message": "Token expired." }
        return responseData
    }
    let response
    try {
        if (query == null) {
            response = await config.axios.get('https://newsapi.org/v2/top-headlines', {
                params: newsConfig.headlineParams
            })
            let newsResponse = {};
            let newsResponseData = [];
            for (let i = 0; (i < 10 && i < response.data.articles.length); i++) {
                newsResponseData.push({ "headline": response.data.articles[i].title, "link": response.data.articles[i].url })
            }
            newsResponse["count"] = newsResponseData.length
            newsResponse["data"] = newsResponseData
            responseData["data"] = newsResponse
            responseData["status"] = 200
            return responseData
        }
        else {
            let queryParams = newsConfig.queryParams;
            queryParams["q"] = query
            response = await config.axios.get('https://newsapi.org/v2/everything', {
                params: queryParams
            })
            let newsResponse = {};
            let newsResponseData = [];
            for (let i = 0; (i < 10 && i < response.data.articles.length); i++) {
                newsResponseData.push({ "headline": response.data.articles[i].title, "link": response.data.articles[i].url })
            }
            newsResponse["count"] = newsResponseData.length
            newsResponse["data"] = newsResponseData
            responseData["data"] = newsResponse
            responseData["status"] = 200
            return responseData
        }
    } catch (error) {
        responseData["status"] = 400
        responseData["data"] = { "message": error.response.data.message }
        return responseData
    }
}

module.exports = {
    fetchNews: fetchNews
}