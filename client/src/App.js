// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Books from './components/Books';
import CreateBook from './components/CreateBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/" element={<Login />} />

        {/* Private routes for authenticated users only */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Header isLoggedIn={true} />
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Header isLoggedIn={true} />
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-book"
          element={
            <PrivateRoute>
              <Header isLoggedIn={true} />
              
              <CreateBook />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-book"
          element={
            <PrivateRoute>
              <Header isLoggedIn={true} />
              <UpdateBook />
            </PrivateRoute>
          }
        />
        <Route
          path="/delete-book"
          element={
            <PrivateRoute>
              <Header isLoggedIn={true} />
              <DeleteBook />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
