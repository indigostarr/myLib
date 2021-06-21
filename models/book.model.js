const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    bookId: String,
    title: String,
    authors: String,
    pages: Number,
    thumbnail: String,
    description: String,
    status: String,
    publishedDate: String,
    averageRating: String,
    categories: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
