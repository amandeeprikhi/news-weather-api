const file = require('../utilities/fileUtils')

let login = async function (reqBody) {
    let responseData = {}
    try {
        let { username, password } = reqBody
        if (username == null || password == null) {
            responseData["status"] = 400
            responseData["data"] = { "message": "Please enter username and password" }
        }
        else {
            let loginToken = await file.findUser(username, password)
            if (loginToken == null) {
                responseData["status"] = 401
                responseData["data"] = { "message": "User not found." }
            }
            else {
                responseData["status"] = 200
                responseData["data"] = { "token": loginToken }
            }
        }
        return responseData
    } catch (error) {
        responseData["status"] = 500
        responseData["data"] = { "message": "Internal Server Error." }
        return responseData
    }

}

let signup = async function (reqBody) {
    let responseData = {}
    try {
        let { username, password, email } = reqBody
        if (username == null || password == null || email == null) {
            responseData["status"] = 400
            responseData["data"] = { "message": "Please enter username, password and email" }
        }
        else {
            let loginToken = await file.addUser(username, password, email)
            if (loginToken == null) {
                responseData["status"] = 400
                responseData["data"] = { "message": "User already exists." }
            }
            else {
                responseData["status"] = 200
                responseData["data"] = { "token": loginToken }
            }
        }
        return responseData
    } catch (error) {
        responseData["status"] = 500
        responseData["data"] = { "message": "Internal Server Error." }
        return responseData
    }

}

module.exports = {
    login: login,
    signup: signup
}