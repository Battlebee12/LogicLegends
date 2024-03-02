// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Eventify</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>

          {isAuthenticated ? (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
