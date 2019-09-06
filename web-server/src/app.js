const path = require("path");
const express = require("express");

const app = express();

const pathPublicDirectory = path.join(__dirname, "../public");

app.set("view engine", "hbs");

app.use(express.static(pathPublicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Shivam Anand"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "something",
    location: "Somewhere"
  });
});

app.listen(3000, () => {
  console.log("running on port : 3000");
});
