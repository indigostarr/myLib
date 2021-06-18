module.exports = (handlers) => {
  // import express
  const express = require("express");
  const bodyParser = require("body-parser");
  const axios = require("axios");

  // start App
  const app = express();

  // // CRUD handler
  app.use(bodyParser.urlencoded({ extended: true }));

  // add view engine
  const ejs = require("ejs");
  app.set("view engine", "ejs");

  const mongoose = require("mongoose");
  const https = require("https");
  const request = require("request");
};
