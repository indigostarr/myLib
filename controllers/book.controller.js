const Book = require("../models/book.model.js");
const fileDir = "/Users/indigostarr/Documents/the_odin_project/myLib";

// homepage
exports.homepage = (req, res) => {
  res.sendFile(fileDir + "/index.html");
};

// // search page
// exports.search = (req, res) => {
//   res.sendFile(fileDir + '/index.html')
// }

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
