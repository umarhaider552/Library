// src/api.js
import axios from 'axios';

// Register a new user
export const registerUser = async (userData) => {
  return await axios.post('/api/users/register', userData);
};

// Login a user
export const loginUser = async (userData) => {
  return await axios.post('/api/users/login', userData);
};

// Get all books
export const getBooks = async () => {
  return await axios.get('/api/books');
};


// Get a single book by ID
export const getBookById = async (id) => {
  return await axios.get(`/api/books/${id}`);
};

// Create a new book
export const createBook = async (bookData) => {
  return await axios.post('/api/books', bookData);
};

// Update a book
export const updateBook = async (id, bookData) => {
  return await axios.put(`/api/books/${id}`, bookData);
};

// Delete a book
export const deleteBook = async (id) => {
  return await axios.delete(`/api/books/${id}`);
};