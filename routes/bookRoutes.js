const express = require('express');
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createBook);        // Create a book
router.get('/', protect, getAllBooks);        // Get all books
router.get('/:id', protect, getBookById);     // Get a book by ID
router.put('/:id', protect, updateBook);      // Update a book by ID
router.delete('/:id', protect, deleteBook);   // Delete a book by ID

module.exports = router;
