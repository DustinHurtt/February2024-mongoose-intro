var express = require("express");
var router = express.Router();

const Book = require("../models/Book");

/* GET users listing. */
router.get("/", (req, res, next) => {
  Book.find()
    .populate('author')
    .then((foundBooks) => {
      console.log("These are the found books===>", foundBooks);
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log("Error finding books ===>", err);
      res.status(502).json(err);
    });
});

router.get("/details/:bookId", (req, res, next) => {
  Book.findById(req.params.bookId)
    .populate('author')
    .then((foundBooks) => {
      console.log("These are the found books===>", foundBooks);
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log("Error finding books ===>", err);
      res.status(502).json(err);
    });
});

router.post("/", (req, res, next) => {
  const { title, year, codeISBN, quantity, genre, author } = req.body;

  Book.create({
    title,
    year,
    codeISBN,
    quantity,
    genre,
    author,
  })
    .then((createdBook) => {
      console.log("Created Book ===>", createdBook);
      res.status(201).json(createdBook);
    })
    .catch((err) => {
      console.log("Error creating book ===>", err);
      res.status(502).json(err);
    });
});

router.post("/update/:bookId", (req, res, next) => {

  Book.findByIdAndUpdate(
    req.params.bookId,
    req.body,
    {
      new: true,
    }
  )
    .then((updatedBook) => {
      console.log("This is the updated book ===>", updatedBook);
      res.json(updatedBook);
    })
    .catch((err) => {
      console.log("Error updating book ====>", err);
      res.status(502).json(err);
    });
});

router.get('/delete/:bookId', (req, res, next) => {
    Book.findByIdAndDelete(req.params.bookId)
        .then((deletedBook) => {
            console.log("Deleted ===>", deletedBook)
            res.json(deletedBook)
        })
        .catch((err) => {
            console.log("Error deleting book ====>", err);
            res.status(502).json(err);
          });
})

module.exports = router;
