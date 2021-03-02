const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=ef4f13bae4285a49412d1ebbcf3037fe`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather[0].description + ' It is currently ' + body.current.temp + ' degress Celsius out. There is a ' + body.hourly[0].pop + '% chance of rain.')
        }
    })
}

module.exports = forecast