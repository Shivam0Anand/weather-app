const request = require("request");

const url =
  "https://api.darksky.net/forecast/b4c116672bb90062c3cf3ed6171b5d07/28.474388,77.503990";

request({ url: url, json: true }, (error, responce) => {
  console.log(responce.body.currently);
});
