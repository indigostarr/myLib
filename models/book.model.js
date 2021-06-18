const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    bookId: String,
    title: String,
    author: String,
    pages: Number,
    read: String,
    thumbnail: String,
    description: String,
    review: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
