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

const getBooks = async (book) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}`
  );
  const data = await response.json();
  return data;
};

const extractThumbnail = ({ imageLinks }) => {
  const DEFAULT_THUMBNAIL = "icons/logo.svg";
  if (!imageLinks || !imageLinks.thumbnail) {
    return DEFAULT_THUMBNAIL;
  }
  return imageLinks.thumbnail.replace("http://", "https://");
};

const drawChartBook = async (subject, startIndex = 0) => {
  let cbookContainer = document.querySelector(`.${subject}`);
  cbookContainer.innerHTML = `<div class='prompt'><div class="loader"></div></div>`;
  const cdata = await getBooks(
    `subject:${subject}&startIndex=${startIndex}&maxResults=6`
  );
};
