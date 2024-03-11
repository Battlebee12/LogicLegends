import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
    margin-left: 10px;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .logout-btn {
    color: black;
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to handle logout
  const logout = () => {
    // Clear user information from local storage
    localStorage.removeItem('user');
    // Redirect to the login page after logout
    navigate("/login");
  };

  // Retrieve user information from local storage
  const userData = localStorage.getItem('user');
  let user = null;

  // Parse user information if it exists
  if (userData) {
    try {
      user = JSON.parse(userData);
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }

  return (
    <NavbarWrapper>
      <div>
        <Link to="/event-list">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* Option for organizing an event */}
        <Link to="/organize-event">Organize Event</Link>
      </div>
      {/* Conditionally render login option if user is not logged in */}
      {!user && (
        <Link to="/login">Login</Link>
      )}
      {/* Conditionally render user's name and dropdown menu if logged in */}
      {user && (
        <div className="dropdown">
          <span>Hello, {user.name}</span>
          <div className="dropdown-content">
            <Link to="/profile">View Profile</Link>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </NavbarWrapper>
  );
}

export default Navbar;
