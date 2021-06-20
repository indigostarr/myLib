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
const { response } = require("express");

const googleBookAPI = {
  displaySearchResultData: async (title) => {
    try {
      return await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=%22${title}%22`
      );
    } catch (error) {
      console.log(error);
    }
  },

  getBookData: async (bookId) => {
    try {
      return await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
    } catch (error) {
      console.log(error);
    }
  },

  // transformBookData: async (response) => {
  //   console.log("response");
  //   return response.map(([key, value]) => {
  //     const books = {
  //       authors:
  //     };
  //     books["authors"] = response.volumeInfo.authors.join(", ");
  //     books["thumbnail"] = () => {
  //       response.volumeInfo.imageLinks
  //         ? response.imageLinks.thumbnail
  //         : "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-07-300x300.png";
  //     };
  //     books["title"] = response.volumeInfo.title;
  //     books["pages"] = response.volumeInfo.pageCount;
  //     books["description"] = response.volumeInfo.description;
  //     return books;
  //   });
  // },
};

module.exports = ("googleBookAPI", googleBookAPI);
