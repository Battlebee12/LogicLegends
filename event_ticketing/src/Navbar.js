import React from 'react';
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
`;

function Navbar() {
  const navigate = useNavigate();

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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {/* Conditionally render login option if user is not logged in */}
      {!user && (
        <Link to="/login">Login</Link>
      )}
      {/* Conditionally render user's name and logout option if logged in */}
      {user && (
        <div>
          <span>Hello, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </NavbarWrapper>
  );
}

export default Navbar;
