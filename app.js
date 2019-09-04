const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];

if (!address) {
  console.log("Please provide location!");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastdata);
    });
  });
}
