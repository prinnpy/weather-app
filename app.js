const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const cityName = process.argv[2];

if (!cityName) {
    console.log("please provide the address");
} else {
    geocode(cityName, (error, data) => {
        if (error) {
            return console.log(error);
        }
        
        forecast(data.lat, data.long, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(data.location);
            console.log(forecastData)
        })
    });
}



