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

const displayBookData = async (bookId) => {
  try {
    return await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = ("displayBookData", displayBookData);
