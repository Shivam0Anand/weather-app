const request = require("request");
const geocode = require("./utils/geocode.js");
// Url
const url =
  "https://api.darksky.net/forecast/b4c116672bb90062c3cf3ed6171b5d07/28.474388,77.503990?units=si";

// Weather Request
// request({ url: url, json: true }, (error, responce) => {
//   if (error) {
//     console.log("Internet on kr le pahle!");
//   } else if (responce.body.error) {
//     console.log("Sai se daal bhai!");
//   } else {
//     console.log(
//       responce.body.daily.data[0].summary +
//         ". It is currently " +
//         responce.body.currently.temperature +
//         " degrees out. There is " +
//         responce.body.currently.precipProbability +
//         "% chance of rain."
//     );
//   }
// });

geocode("greater noida", (error, data) => {
  console.log("error: ", error);
  console.log("data ", data);
});
