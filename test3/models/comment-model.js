const mongoose = require('mongoose');

const commentName = 'Comment';

const commentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(commentName, commentSchema);
