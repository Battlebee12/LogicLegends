// src/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar__logo">Event Ticketing</h1>
        <ul className="navbar__menu">
          <li className="navbar__item"><a href="#">Home</a></li>
          <li className="navbar__item"><a href="#">Events</a></li>
          <li className="navbar__item"><a href="#">About</a></li>
          <li className="navbar__item"><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; // Make sure to export the Navbar component
