const Book = require('../models/bookModel');

// Create a Book
exports.createBook = async (req, res) => {
  const { title } = req.body;

  try {
    const newBook = await Book.create({
      title
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    console.log('Fetched Books:', books); // Log books
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error); // Log any errors
    res.status(500).json({ message: error.message });
  }
};

// Get Single Book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Book
exports.updateBook = async (req, res) => {
  const { title } = req.body;

  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const updatedBook = await book.save();
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Book
exports.deleteBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
  
      // Use findByIdAndDelete instead of remove
      await Book.findByIdAndDelete(req.params.id); // Correct method
  
      res.status(200).json({ message: 'Book removed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
