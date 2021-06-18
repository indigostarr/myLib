const Book = require("../models/book.model.js");
const fileDir = "/Users/indigostarr/Documents/the_odin_project/myLib";
const Search = require("../models/search.model.js");
const displaySearchResultData = require("../app/app.js");
const displayBookData = require("../app/bookdisplay.js");
const { response } = require("express");

// homepage
exports.homepage = (req, res) => {
  res.render("search.ejs");
};

// search page
exports.search = (req, res) => {
  const bookSearch = new Search({
    title: req.body.title,
  });

  const bookData = displaySearchResultData(bookSearch.title);
  bookData
    .then((response) => {
      res.render("search.results.ejs", {
        books: response.data.items,
      });
    })
    .catch((error) => {
      return res.status(404).send({
        message: "no data returned",
      });
    });
};

exports.viewSearchedBook = (req, res) => {
  const bookData = displayBookData(req.params.bookId);
  bookData
    .then((response) => {
      res.render("displayBookData.ejs", { book: response.data });
    })
    .catch((error) => {
      return res.status(404).send({
        message: "no data returned",
      });
    });
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
    bookId: req.body.bookId,
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    read: req.body.read,
    thumbnail: req.body.thumbnail,
    description: req.body.description,
    status: req.body.status,
    review: "",
  });

  // save book
  return book
    .save()
    .then((data) => {
      console.log(data.status);
      res.redirect("/books/" + data.id);
    })
    .catch((error) => {
      return res.status(404).send({
        message: "issue adding book",
      });
    });
};

// get books from database
exports.findAll = (req, res) => {
  // find single book
  Book.find()
    .then((data) => {
      res.render("collection.ejs", { books: data });
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
      res.render("collection.book.ejs", { book: data });
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

// find all books by reading status
exports.findByStatus = (req, res) => {
  console.log("find by status", req.params.status);
  Book.find({
    status: req.params.status,
  })
    .then((data) => {
      res.render("collection.ejs", { books: data });
    })
    .catch((error) => {
      return res.status(404).send({
        message: "issue retrieving books",
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
      bookId: req.body.bookId,
      title: req.body.title,
      author: req.body.author,
      pages: req.body.pages,
      read: req.body.read,
      thumbnail: req.body.thumbnail,
      description: req.body.description,
      status: req.body.status,
      review: req.body.review,
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
      console.log(data.status);
      res.redirect("/books/" + data.id);
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
          message: "book not found with id " + req.params.noteId,
        });
      }
      res.redirect("/books");
    })
    .catch((error) => {
      if (error.kind === "ObjectId" || error.name === "NotFound") {
        return res.status(404).send({
          message: "book not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.noteId,
      });
    });
};
