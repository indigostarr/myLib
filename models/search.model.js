const mongoose = require("mongoose");

const SearchSchema = mongoose.Schema({
  title: String,
  bookId: String,
});

module.exports = mongoose.model("Search", SearchSchema);
