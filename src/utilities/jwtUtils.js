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

let verifyJWT = async function (token) {
    let tokenValue
    try {
        tokenValue = jwt.verify(token, jwtKey)
        return tokenValue
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            // if the error thrown is because the JWT is unauthorized, return a 401 error
            return 401
        }
    }
}

module.exports = {
    generateJWT: generateJWT,
    verifyJWT: verifyJWT
}