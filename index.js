require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dbURI = process.env.DB;
const bodyParser = require("body-parser");
const urlRoutes = require("./routes/url");

mongoose.connect(dbURI)

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(urlRoutes);

app.listen(4000);
