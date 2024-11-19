import React, { useState } from 'react';
import { deleteBook } from '../api';
import { getToken } from '../utils/auth';  
import '../App.css'; 

const DeleteBook = () => {
  const [bookId, setBookId] = useState('');

  const handleDeleteBook = async (e) => {
    e.preventDefault();
    const token = getToken(); 

    if (!bookId) {
      alert('Please provide Book ID');
      return;
    }

    try {
      const response = await deleteBook(bookId, token);
      alert(`Book with ID ${bookId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Book not found');
    }
  };

  return (
    <div className="create-book-container">
      <h2>Delete a Book</h2>
      <form onSubmit={handleDeleteBook}>
        <input
          type="text"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button type="submit">Delete Book</button>
      </form>
    </div>
  );
};

export default DeleteBook;
