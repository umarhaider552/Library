import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Books from './components/Books';
import CreateBook from './components/CreateBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import './App.css';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check if the user is logged in

  return (
    <Router>
      <Routes>
        {/* Route for Login page */}
        <Route path="/" element={<Login />} />

        {/* Protected routes that require login */}
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/update-book" element={<UpdateBook />} />
            <Route path="/delete-book" element={<DeleteBook />} />
          </>
        ) : (
          // If not logged in, redirect all other paths to login
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
