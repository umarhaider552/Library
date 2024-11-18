import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Navbar = () => (
  <nav style={{ backgroundColor: theme.primaryColor, padding: '10px' }}>
    <Link to="/books" style={{ color: theme.textColor, marginRight: '15px' }}>Books</Link>
    <Link to="/login" style={{ color: theme.textColor }}>Logout</Link>
  </nav>
);

export default Navbar;
