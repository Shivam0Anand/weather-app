const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/b4c116672bb90062c3cf3ed6171b5d07/" +
    latitude +
    "," +
    longitude +
    "?units=si&&lang=hi";

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
          "। फिलहाल यह " +
          body.currently.temperature +
          " डिग्री बाहर है। उच्चतम तापमान आज " +
          body.daily.data[0].temperatureHigh +
          " के साथ निम्न " +
          body.daily.data[0].temperatureLow +
          " है। बारिश की " +
          body.currently.precipProbability * 100 +
          "% संभावना है।"
      );
    }
  });
};

module.exports = forecast;
