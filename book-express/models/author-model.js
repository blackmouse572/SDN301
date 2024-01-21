const mongoose = require('mongoose');

const authorName = 'Author';
const authorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(authorName, authorSchema);
