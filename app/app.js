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

// public url https://www.googleapis.com/books/v1/volumes?q=%22crucible%22

// axios

const displaySearchResultData = async (title) => {
  try {
    return await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=%22${title}%22`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = ("displaySearchResultData", displaySearchResultData);
