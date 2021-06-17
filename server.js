// import express
const express = require("express");
const bodyParser = require("body-parser");

// start app
const app = express();
// app.use(express.static('dist'));

// CRUD handler
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add view engine
app.set("view engine", "ejs");

// Require book routes and models
require("./routes/book.routes.js")(app);
require("./models/book.model");
// require('./app/app.js');

// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// database connection
mongoose
  .connect(dbConfig.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((client) => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// create a server the browser can listen to
app.listen(2080, function () {
  console.log("Listening to 2080");
});
