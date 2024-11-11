const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  publishedDate: { type: Date },
  genre: { type: String },
  available: { type: Boolean, default: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // User who added the book
});

module.exports = mongoose.model('Book', bookSchema);
