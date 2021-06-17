const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    pages: Number,
    read: String,
    review: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
