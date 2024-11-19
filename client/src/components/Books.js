import React, { useEffect, useState } from 'react';
import { getBooks } from '../api';
import { getToken } from '../utils/auth';

const Books = () => {
  const [books, setBooks] = useState([]); // Initial state is an empty array
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    const token = getToken();
    try {
      const response = await getBooks(token);

      // Debugging: Log the raw API response and books data
      console.log('Raw API Response:', response);
      console.log('Books Array:', response.data);

      if (Array.isArray(response.data)) {
        setBooks(response.data);
      } else {
        throw new Error('Unexpected API response format');
      }
    } catch (err) {
      console.error('Error fetching books:', err);
      setError('Failed to fetch books. Please try again later.');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
  {books.length > 0 ? (
    books.map((book) => (
      <li key={book._id || book.id}>
        <strong>ID:</strong> {book._id || 'No ID available'} <br />
        <strong>Title:</strong> {book.title} 
      </li>
    ))
  ) : (
    <p>No books found.</p>
  )}
</ul>
      )}
    </div>
  );
};

export default Books;
