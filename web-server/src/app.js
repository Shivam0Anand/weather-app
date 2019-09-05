const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("hello express!");
});

app.get("/help", (req, res) => {
  res.send("help Page!");
});

app.get("/about", (req, res) => {
  res.send("About!");
});

app.get("/weather", (req, res) => {
  res.send("Your weather Report!");
});

app.listen(3000, () => {
  console.log("running on port : 3000");
});
