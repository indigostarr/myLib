const mongoose = require("mongoose");

const SearchSchema = mongoose.Schema({
  title: String,
});

module.exports = mongoose.model("Search", SearchSchema);
