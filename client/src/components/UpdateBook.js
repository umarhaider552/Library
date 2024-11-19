import React, { useState } from 'react';
import { updateBook } from '../api'; // Make sure you have an API function for updating books
import { getToken } from '../utils/auth';
import '../App.css';

const UpdateBook = () => {
  const [bookId, setBookId] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    const token = getToken();

    if (!bookId || !newTitle) {
      alert('Please provide both Book ID and New Title');
      return;
    }

    try {
      const response = await updateBook( bookId, newTitle , token);
      
      if (response?.data?.id) {
        alert(`Book with ID ${response.data.id} updated successfully`);
      } else {
        alert('Book updated successfully');
      }
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book');
    }
  };

  return (
    <div className="create-book-container">
      <h2>Update Book</h2>
      <form onSubmit={handleUpdateBook}>
        <input
          type="text"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
