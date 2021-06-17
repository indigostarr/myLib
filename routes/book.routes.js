module.exports = (app) => {
  const books = require("../controllers/book.controller.js");

  // send a GET request to READ HTML file
  app.get("/", books.homepage);

  // send GET for search page
  // app.get('/search', books.search);

  // POST a new book
  app.post("/books", books.create);

  // GET all book
  app.get("/books", books.findAll);

  // GET a book by ID
  app.get("/books/:bookId", books.findOne);

  // PUT a book by ID
  app.put("/books/:bookId", books.update);

  // DELETE a book by ID
  app.delete("/books/:bookId", books.delete);
};
