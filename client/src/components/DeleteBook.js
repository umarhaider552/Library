import React from 'react';
import Header from './Header';

const DeleteBook = () => {
  return (
    <div>
      <Header />
      <h2>Delete a Book</h2>
      <form>
        <input type="text" placeholder="Book ID" />
        <button type="submit">Delete Book</button>
      </form>
    </div>
  );
};

export default DeleteBook;
