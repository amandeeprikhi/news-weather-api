const jwt = require("jsonwebtoken")
require('dotenv').config()

const jwtKey = process.env.JWT_KEY != null ? process.env.JWT_KEY : "secret_key"
const jwtExpirySeconds = process.env.JWT_TIMEOUT != null ? process.env.JWT_TIMEOUT : 5000

let generateJWT = async function (username) {
    const token = jwt.sign({ username }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
    })
    return token
}

module.exports = {
    generateJWT: generateJWT
}