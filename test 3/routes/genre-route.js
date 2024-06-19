const express = require('express');
const Genre = require('../models/genre-model');
const router = express.Router();
const mongoose = require('mongoose');

// GET all genres
router.get('/', (req, res) => {
  Genre.find()
    .then((genres) => {
      res.status(200).json(genres);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// GET a single genre
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Genre.findById(id)
    .then((genre) => {
      res.status(200).json(genre);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// POST a new genre
router.post('/', (req, res) => {
  const { name } = req.body;
  const genre = new Genre({
    _id: new mongoose.Types.ObjectId(),
    name,
  });
  genre
    .save()
    .then((newGenre) => {
      res.status(201).json(newGenre);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// DELETE a genre
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Genre.findByIdAndRemove(id)
    .then((genre) => {
      res.status(200).json(genre);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// PUT (update) a genre
router.put(':id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedGenre = { name };

  Genre.findByIdAndUpdate(id, updatedGenre, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
