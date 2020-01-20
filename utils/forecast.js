const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/6f8c4600e91c2fd6e0e170efaf27fc5a/${long},${lat}?`;
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to find services', undefined);
        } else if (response.body.error) {
            callback('unable to find weather', undefined);
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;

