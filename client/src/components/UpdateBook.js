import React from 'react';
import Header from './Header';

const UpdateBook = () => {
  return (
    <div>
      <Header />
      <h2>Update Book</h2>
      <form>
        <input type="text" placeholder="Book ID" />
        <input type="text" placeholder="New Title" />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
