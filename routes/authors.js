var express = require("express");
var router = express.Router();

const Author = require('../models/Author')

router.get('/', (req, res, next) => {
  Author.find()
    .then((foundAuthors) => {
      res.json(foundAuthors)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })
})

router.post("/", (req, res, next) => {
  Author.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bio: req.body.bio,
  })
    .then((createdAuthor) => {
      console.log("Author added ->", createdAuthor);

      res.status(201).json(createdAuthor);
    })
    .catch((error) => {
      console.error("Error while creating the author ->", error);
      res.status(500).json({ errorMessage: "Failed to create the author", error });
    });
});

module.exports = router;
