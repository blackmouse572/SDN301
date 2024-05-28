/**
 * This file contain CRUD function for the promotion document
 */

const Promotion = require('./promotion');

const createPromotion = async (data) => {
  try {
    const promotion = new Promotion(data);
    return await promotion.save();
  } catch (error) {
    throw error;
  }
};

const getPromotions = async (find, options) => {
  try {
    return await Promotion.find(find, null, options);
  } catch (error) {
    throw error;
  }
};

const getPromotion = async (find) => {
  try {
    return await Promotion.findOne(find);
  } catch (error) {
    throw error;
  }
};

const updatePromotion = async (find, data) => {
  try {
    return await Promotion.findOneAndUpdate(find, data);
  } catch (error) {
    throw error;
  }
};

const deletePromotion = async (id, options) => {
  try {
    return await Promotion.findByIdAndDelete(id, options);
  } catch (error) {
    throw error;
  }
};

const deletePromotions = async () => {
  try {
    return await Promotion.deleteMany();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPromotion,
  getPromotions,
  getPromotion,
  updatePromotion,
  deletePromotion,
  deletePromotions,
};
