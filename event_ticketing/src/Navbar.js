import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-4">Eventify</h1>      
        <div className="space-x-4">
          <Link to="/event-list">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {/* Option for organizing an event */}
          <Link to="/organize-event">Organize Event</Link>
        </div>
      </div>
      {/* Conditionally render login option if user is not logged in */}
      {!user && (
        <Link to="/login">Login</Link>
      )}
      {/* Conditionally render user's name and dropdown menu if logged in */}
      {user && (
        <div className="group inline-block relative">
          <span className="cursor-pointer">{`Hello, ${user.name}`}</span>
          <div className="hidden group-hover:block absolute bg-white border rounded p-2">
            <Link to="/profile">View Profile</Link>
            <button className="text-black" onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
