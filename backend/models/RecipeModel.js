// models/Recipe.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  instructions: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Vegan', 'Drinks', 'Other'],
    default: 'Other',
  },
  type: {
    type: String,
    required: true,
    enum: ['Veg', 'Non-Veg'],
    default: 'Veg',
  },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   // required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Recipe', recipeSchema);
 