import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOrganizer, setIsOrganizer] = useState(false); // State to store whether the user is an organizer

  useEffect(() => {
    // Check if the user is an organizer when the component mounts
    const userData = JSON.parse(localStorage.getItem('user'));
    setIsOrganizer(userData && userData.isOrganizer);
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-4">Eventify</h1>
        <div className="space-x-4">
          <Link to="/event-list" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          
          {isOrganizer && (
  <Link to="/organize-event" className="hover:text-gray-300">
    Organize Event
  </Link>
)}

            
        </div>
      </div>
      {/* Add cart and sell tickets icons here */}
      <div className="flex items-center">
        {/* Render cart and sell tickets icons */}
        <Link to="/cart" className="mr-4 hover:text-gray-300">
          <FaShoppingCart />
        </Link>
        <Link to="/sell-tickets" className="mr-4 hover:text-gray-300">
          Sell Tickets
        </Link>
        {localStorage.getItem('user') ? (
          <div className="relative inline-block">
            <button onClick={() => setShowDropdown(!showDropdown)} className="focus:outline-none">
              <span>{`Hello, ${JSON.parse(localStorage.getItem('user')).name}`}</span>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  View Profile
                </Link>
                <Link to="/tickets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  View Tickets
                </Link>
                <button onClick={logout} className="text-sm text-gray-700 block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/" className="hover:text-gray-300">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
