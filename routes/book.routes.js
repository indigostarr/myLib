module.exports = (app) => {
  const books = require("../controllers/book.controller.js");

  // send a GET request to READ HTML file
  app.get("/", books.homepage);

  //send POST for search page
  app.post("/search", books.search);

  //send GET for search page and specific book
  app.get("/search/:bookId", books.viewSearchedBook);

  // POST a new book
  app.post("/books", books.create);

  // GET all book
  app.get("/books", books.findAll);

  // GET books by status
  app.get("/books/:status", books.findByStatus);

  // GET a book by ID
  app.get("/books/:bookId", books.findOne);

  // PUT a book by ID
  app.post("/books/:bookId", books.update);

  // DELETE a book by ID
  app.get("/books/delete/:bookId", books.delete);
};
