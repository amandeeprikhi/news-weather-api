const jsonfile = require('jsonfile')
const jwt = require('../utilities/jwtUtils')
const file = 'userData.json'

let findUser = async function (username, password) {
    let token
    let fileData = await jsonfile.readFileSync(file)
    fileData.data.forEach(async function (item, index) {
        if (item.username == username && item.password == password) {
            token = jwt.generateJWT(username)
        }
    })
    return token
}

let addUser = async function (username, password, email) {
    let flag = true
    let token
    let fileData = await jsonfile.readFileSync(file)
    fileData.data.forEach(async function (item, index) {
        if (item.username == username) {
            flag = false
        }
    })
    if(flag == false){
        return token
    }
    const obj = {
        "username": username,
        "password": password,
        "email": email
    }
    fileData.data.push(obj)
    jsonfile.writeFileSync(file, fileData)
    token = jwt.generateJWT(username)
    return token
}

module.exports = {
    findUser: findUser,
    addUser: addUser
}