const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    bookId: String,
    title: String,
    author: String,
    pages: Number,
    thumbnail: String,
    description: String,
    review: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
