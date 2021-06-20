const Book = require("../models/book.model.js");
const Search = require("../models/search.model.js");
const {
  displayBookData,
  displaySearchResultData,
} = require("../app/googleAPI.js");
const { response } = require("express");
const { data } = require("autoprefixer");

// homepage
exports.homepage = (req, res) => {
  res.render("search.ejs");
};

// search page
exports.search = (req, res) => {
  const bookData = displaySearchResultData(req.body.title);

  bookData
    .then((response) => {
      if (response.data.items === undefined) {
        res.render("search.ejs", {
          searchResultUndefined: "Book not found!",
        });
      } else {
        res.render("search.results.ejs", {
          books: response.data.items,
          img: "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-07-300x300.png",
          search: req.body.title,
        });
      }
    })
    .catch((error) => {
      res.render("search.ejs");
    });
};

exports.viewSearchedBook = (req, res) => {
  const bookData = displayBookData(req.params.bookId);

  bookData
    .then((response) => {
      res.render("displayBookData.ejs", {
        book: response.data.volumeInfo,
        img: "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-07-300x300.png",
      });
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

  if (!req.body.title || !req.body.authors || !req.body.pages) {
    return res.status(400).send({
      message: "Missing parameter",
    });
  }

  console.log(req.body.title);
  // create new book object
  const book = new Book({
    bookId: req.body.bookId,
    title: req.body.title,
    authors: req.body.authors,
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
      console.log("saved");
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
  if (req.query.status) {
    return findByStatus(req.query.status, res);
  }
  // find all books
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
findByStatus = (status, res) => {
  Book.find({
    status: status,
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
      $set: {
        status: req.body.status,
      },
    },
    {
      new: true,
      useFindAndModify: false,
    }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "unable to find " + req.params.title,
        });
      }
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
