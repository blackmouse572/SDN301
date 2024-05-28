const express = require('express');
const Book = require('../models/book-model');
const Comment = require('../models/comment-model');
const router = express.Router();
const mongoose = require('mongoose');

// prefix: /book/:bookid
router.get('/:booksId/comments', async (req, res) => {
  const { booksId } = req.params;

  const book = await Book.findById(booksId).populate('comment').exec();

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.status(200).json(book.comment);
});

router.post('/:booksId/comments', async (req, res) => {
  const { booksId } = req.params;
  const { content } = req.body;

  const book = await Book.findById(booksId).populate('comment').exec();

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const newComment = new Comment({ content, _id: new mongoose.Types.ObjectId() });
  await newComment.save();

  book.comment.push(newComment._id);

  await book.save();

  res.status(201).json(book.comment);
});

router.delete('/:booksId/comments/:commentId', async (req, res) => {
  const { booksId, commentId } = req.params;

  const book = await Book.findById(booksId).populate('comment').exec();

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const comment = await Comment.findById(commentId).exec();

  if (!comment) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  book.comment.pull(comment);

  await book.save();
  Comment.deleteOne({ _id: commentId }).exec();
  res.status(200).json(book.comment);
});

router.put('/:booksId/comments/:commentId', async (req, res) => {
  const { booksId, commentId } = req.params;
  const { content } = req.body;

  const book = await Book.findById(booksId).populate('comment').exec();

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const comment = await Comment.findById(commentId).exec();

  if (!comment) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  comment.content = content;

  await comment.save();

  res.status(200).json(comment);
});

module.exports = router;
