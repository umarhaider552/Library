import React, { useState } from 'react';
import { createBook } from '../api';
import { getToken } from '../utils/auth'; 
import '../App.css'; 

const CreateBook = () => {
  const [title, setTitle] = useState('');

  const handleCreateBook = async () => {
    const token = getToken(); 

    if (!title) {
      alert('Please provide Book Title');
      return;
    }

    try {
      const response = await createBook({ title }, token);
      const bookId = response.data.id || response.data._id;
      alert(`Book created successfully. Book ID: ${bookId}`);
    } catch (error) {
      console.error('Error creating book:', error);
      alert('Failed to create book');
    }
  };

  return (
    <div className="create-book-container">
      <h2>Create Book</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleCreateBook}>Add Book</button>
    </div>
  );
};

export default CreateBook;
