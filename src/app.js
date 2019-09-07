const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

const port = process.env.PORT || 3000;

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
    message: "Message",
    name: "Shivam Anand"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("error You must provide address term!");
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address
        });
      });
    }
  );
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Shivam Anand",
    errorMessage: "Help article Not found!"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Shivam Anand",
    errorMessage: "Page Note Found!"
  });
});

app.listen(port, () => {
  console.log("running on port : 3000");
});
