const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/b4c116672bb90062c3cf3ed6171b5d07/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Internet Connect kr BC!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        // console.log(body),
        body.daily.data[0].summary +
          ". It is currently " +
          body.currently.temperature +
          " degrees out. The High today is " +
          body.daily.data[0].temperatureHigh +
          " With a low of " +
          body.daily.data[0].temperatureLow +
          ". There is " +
          body.currently.precipProbability * 100 +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
