/**
 * This file contain CRUD endpoint for the promotion document
 */

const express = require('express');
const operation = require('./operation');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const promotion = await operation.createPromotion(req.body);
    res.status(201).json(promotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const promotions = await operation.getPromotions();
    res.status(200).json(promotions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    const promotions = await operation.deletePromotions();
    res.status(200).json(promotions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const promotion = await operation.getPromotion({ _id: req.params.id });
    res.status(200).json(promotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const promotion = await operation.updatePromotion({ _id: req.params.id }, req.body);
    res.status(200).json(promotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const promotion = await operation.deletePromotion(new mongoose.Types.ObjectId(req.params.id));
    res.status(200).json(promotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
