const request = require("request");

// Url
const url =
  "https://api.darksky.net/forecast/b4c116672bb90062c3cf3ed6171b5d07/28.474388,77.503990?units=si";

const geoCodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Greater%20Noida.json?access_token=pk.eyJ1Ijoic2hpdmFtMjUyIiwiYSI6ImNrMDVuMnFvZzMwZzczbXBranNtamN3MGcifQ.jNu51-ACKqcZf5BTDfnpzg&limit=1";

// Weather Request
request({ url: url, json: true }, (error, responce) => {
  if (error) {
    console.log("Internet on kr le pahle!");
  } else if (responce.body.error) {
    console.log("Sai se daal bhai!");
  } else {
    console.log(
      responce.body.daily.data[0].summary +
        ". It is currently " +
        responce.body.currently.temperature +
        " degrees out. There is " +
        responce.body.currently.precipProbability +
        "% chance of rain."
    );
  }
});

// Geo Request
request({ url: geoCodeUrl, json: true }, (error, responce) => {
  if (error) {
    console.log("Unable to Connect!");
  } else if (responce.body.features.length === 0) {
    console.log("Location Not Found!");
  } else {
    const latitude = responce.body.features[0].center[1];
    const longitude = responce.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
