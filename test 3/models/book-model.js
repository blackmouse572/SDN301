const mongoose = require('mongoose');
const bookName = 'Book';
const bookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  summary: {
    type: String,
    maxLength: 1000,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publication_year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

module.exports = mongoose.model(bookName, bookSchema);
