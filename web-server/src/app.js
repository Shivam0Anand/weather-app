const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define Paths for express
const pathPublicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

// setup static directory to serve
app.use(express.static(pathPublicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Shivam Anand"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Shivam Anand"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message: "Message"
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
