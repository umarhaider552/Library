// src/api.js
import axios from 'axios';

// Login a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post('/api/users/login', userData);
    return response;
  } catch (error) {
    console.error('API login error:', error);
    throw error;
  }};

// Get all books
export const getBooks = async (token) => {
  try {
    const response = await axios.get('/api/books', {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
    });
    return response;
  } catch (error) {
    console.error('Error getting books:', error);
    throw error;  // Rethrow error to be handled by caller
  }
};

// Get a single book by ID
export const getBookById = async (id, token) => {
  try {
    const response = await axios.get(`/api/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
    });
    return response;
  } catch (error) {
    console.error('Error getting book by id:', error);
    throw error;  // Rethrow error to be handled by caller
  }
};

// Create a new book
export const createBook = async (bookData, token) => {
  try {
    const response = await axios.post('/api/books', bookData, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
    });
    return response;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;  // Rethrow error to be handled by caller
  }
};

// Update a book
export const updateBook = async (id, bookData, token) => {
  try {
    const response = await axios.put(`/api/books/${id}`, bookData, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error; 
  }
};

// Delete a book
export const deleteBook = async (id, token) => {
  try {
    // Send a DELETE request to the server with the token in the Authorization header
    const response = await axios.delete(`/api/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token to the request
      },
    });

    return response; // Return the response from the server
  } catch (error) {
    console.error('API error:', error);
    throw error; // Rethrow the error to be handled in the component
  }
};

