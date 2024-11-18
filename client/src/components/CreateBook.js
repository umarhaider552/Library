import React from 'react';
import Header from './Header';

const CreateBook = () => {
  return (
    <div>
      <Header />
      <h2>Create a New Book</h2>
      <form>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Author" />
        <button type="submit">Create Book</button>
      </form>
    </div>
  );
};

export default CreateBook;
