import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../App.css'; // Make sure this import is included

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove the login status
    navigate('/'); // Redirect to login page
  };

  // Function to determine if the current link is active
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.jpg" alt="SkillVerse Logo" className="logo" />
        <h1 className="project-name">SkillVerse</h1>
      </div>
      <nav>
        <Link to="/home" className={`nav-link ${isActive('/home')}`}>Home</Link>
        <Link to="/books" className={`nav-link ${isActive('/books')}`}>All Books</Link>
        <Link to="/create-book" className={`nav-link ${isActive('/create-book')}`}>Create Book</Link>
        <Link to="/update-book" className={`nav-link ${isActive('/update-book')}`}>Update Book</Link>
        <Link to="/delete-book" className={`nav-link ${isActive('/delete-book')}`}>Delete Book</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
    </header>
  );
};

export default Header;
