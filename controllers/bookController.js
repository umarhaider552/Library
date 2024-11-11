const Book = require('../models/bookModel');

// Create a Book
exports.createBook = async (req, res) => {
  const { title, author, description, publishedDate, genre } = req.body;

  try {
    const newBook = await Book.create({
      title,
      author,
      description,
      publishedDate,
      genre,
      createdBy: req.user.id // Get user from token
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
    res.status(200).json(books);
  } catch (error) {
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
  const { title, author, description, publishedDate, genre, available } = req.body;

  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    // Only allow updating books that the user created
    if (book.createdBy.toString() !== req.user.id)
      return res.status(403).json({ message: 'User not authorized' });

    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.publishedDate = publishedDate || book.publishedDate;
    book.genre = genre || book.genre;
    book.available = available !== undefined ? available : book.available;

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

    if (book.createdBy.toString() !== req.user.id)
      return res.status(403).json({ message: 'User not authorized' });

    await book.remove();
    res.status(200).json({ message: 'Book removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
