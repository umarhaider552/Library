import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure this import is included

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove the login status
    navigate('/'); // Redirect to login page
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.jpg" alt="SkillVerse Logo" className="logo" />
        <h1 className="project-name">SkillVerse</h1>
      </div>
      <nav>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/create-book" className="nav-link">Create Book</Link>
        <Link to="/update-book" className="nav-link">Update Book</Link>
        <Link to="/delete-book" className="nav-link">Delete Book</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
    </header>
  );
};

export default Header;
