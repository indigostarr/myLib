const Book = require("../models/book.model.js");
const fileDir = "/Users/indigostarr/Documents/the_odin_project/myLib";
const Search = require("../models/search.model.js");

// homepage
exports.homepage = (req, res) => {
  res.sendFile(fileDir + "/index.html");
};

// search page
exports.search = (req, res) => {
  console.log("book");
  const bookSearch = new Search({
    title: req.body.title,
  });
  console.log(bookSearch.title);

  app.get(
    `https://www.googleapis.com/books/v1/volumes?q=crucible&key=AIzaSyCZBZM-woQWBePfWuMZawx65nfURB1-cCM`,
    (req, res) => {
      console.log(res.json());
    }
  );
  // res.render("search.ejs", { books: data });
};

// Create and Save
exports.create = (req, res) => {
  // validation
  if (!req.body) {
    return res.status(400).send({
      message: "body is empty",
    });
  }

  // create new book object
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    read: req.body.read,
    review: "",
  });

  // save book
  return book
    .save()
    .then((data) => {
      res.send(data);
      // res.redirect('/search');
    })
    .catch((error) => {
      return res.status(404).send({
        message: "issue adding book",
      });
    });
};

// get books from database
exports.findAll = (req, res) => {
  // find book
  console.log("here");

  Book.find()
    .then((data) => {
      res.render("books.ejs", { books: data });
    })
    .catch((error) => {
      return res.status(404).send({
        message: "issue retrieving books",
      });
    });
};

// get a book from database by ID
exports.findOne = (req, res) => {
  // find book
  Book.findById(req.params.bookId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "unable to find " + req.params.title,
        });
      }
      res.send(data);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message: "unable to find " + req.params.title,
        });
      }
      return res.status(500).send({
        message: "unable to retrieve " + req.params.title,
      });
    });
};

// Update a book entry
exports.update = (req, res) => {
  // validation
  if (!req.body) {
    return res.status(400).send({
      message: "book doesn't exist",
    });
  }

  // Find book and update
  Book.findByIdAndUpdate(
    req.params.bookId,
    {
      title: req.body.title,
      author: req.body.author,
      pages: req.body.pages,
      read: req.body.read,
      review: "",
    },
    {
      new: true,
    }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "unable to find " + req.params.title,
        });
      }
      res.send(data);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message: "unable to find " + req.params.title,
        });
      }
      return res.status(500).send({
        message: "unable to retrieve " + req.params.title,
      });
    });
};

// Delete a book
exports.delete = (req, res) => {
  Book.findByIdAndRemove(req.params.bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send({ message: "Note deleted successfully!" });
    })
    .catch((error) => {
      if (error.kind === "ObjectId" || error.name === "NotFound") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.noteId,
      });
    });
};
