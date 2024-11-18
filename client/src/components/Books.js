import React, { useEffect, useState } from 'react';
import Header from './Header';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchedBooks = [
      { id: 1, title: 'Book 1' },
      { id: 2, title: 'Book 2' },
      { id: 3, title: 'Book 3' },
    ];
    setBooks(fetchedBooks);
  }, []);

  return (
    <>
      <Header />
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Books;
