const axios = require("axios");
module.exports = {
  displayBookData: async (bookId) => {
    try {
      return await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
    } catch (error) {
      console.log(error);
    }
  },
  displaySearchResultData: async (title) => {
    try {
      return await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=%22${title}%22`
      );
    } catch (error) {
      console.log(error);
    }
  },
};
