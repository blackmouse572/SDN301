const express = require('express');
const Author = require('../models/author-model');
const router = express.Router();
const mongoose = require('mongoose');

// GET all authors
router.get('/', (req, res) => {
  Author.find()
    .then((authors) => {
      res.status(200).json(authors);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// GET a single author
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Author.findById(id)
    .then((author) => {
      res.status(200).json(author);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// POST a new author
router.post('/', (req, res) => {
  const { name, birthYear, country } = req.body;
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    name,
    birthYear,
    country,
  });
  author
    .save()
    .then((newAuthor) => {
      res.status(201).json(newAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// DELETE an author
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Author.findByIdAndRemove(id)
    .then((author) => {
      res.status(200).json(author);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// PUT (update) an author
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, birthYear, country } = req.body;
  const newAuthor = { name, birthYear, country };
  Author.findByIdAndUpdate(id, newAuthor, { new: true })
    .then((updatedAuthor) => {
      res.status(200).json(updatedAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
