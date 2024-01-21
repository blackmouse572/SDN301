const mongoose = require('mongoose');

const bookName = 'Book';
const bookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  isbn: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  publish_date: {
    type: Date,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(bookName, bookSchema);
