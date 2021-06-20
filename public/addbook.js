// // import express
// import express from "express";
// import { urlencoded } from "body-parser";
// import axios from "axios";

// // start App
// const app = express();

// // // CRUD handler
// app.use(urlencoded({ extended: true }));

// // add view engine
// import ejs from "ejs";
// app.set("view engine", "ejs");

// import mongoose from "mongoose";
// import https from "https";
// import request from "request";

const mobileSidebar = document.querySelector(".mobile-menu-button");
const sideBar = document.querySelector(".sidebar");

mobileSidebar.addEventListener("click", (e) => {
  sideBar.classList.toggle("-translate-x-full");
});
