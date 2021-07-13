let unixDateToHumanDate = function(unix_timestamp){
    //let unix_timestamp = 1626071400
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    return date.toDateString()
}

module.exports = {
    unixDateToHumanDate : unixDateToHumanDate
}