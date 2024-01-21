const mongoose = require('mongoose');

const genreName = 'Genre';
const genreSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(genreName, genreSchema);
