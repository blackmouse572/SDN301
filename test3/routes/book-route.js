const express = require('express');
const Book = require('../models/book-model');
const router = express.Router();
const mongoose = require('mongoose');

// GET all books
router.get('/', (req, res) => {
  Book.find()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// GET a single book
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Book.findById(id)
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// POST a new book
router.post('/', (req, res) => {
  const { isbn, title, subTitle, publish_date, publisher, pages, description, website } = req.body;
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    isbn,
    title,
    subTitle,
    publish_date,
    publisher,
    pages,
    description,
    website,
  });
  book
    .save()
    .then((newBook) => {
      res.status(201).json(newBook);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// DELETE a book
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Book.findByIdAndRemove(id)
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// PUT (update) a book
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { isbn, title, subTitle, publish_date, publisher, pages, description, website } = req.body;
  const updatedBook = {
    isbn,
    title,
    subTitle,
    publish_date,
    publisher,
    pages,
    description,
    website,
  };
  Book.findByIdAndUpdate(id, updatedBook, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
