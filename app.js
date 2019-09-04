console.log("initialize");

const request = require("request");
request("https://erp.aktu.ac.in", (error, responce, body) => {
  console.log("error", error);
  console.log("statusCode", responce && responce.statusCode);
  console.log("body", body);
});

console.log("Stopping");
