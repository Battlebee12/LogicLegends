import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  // Retrieve user info from localStorage and initialize state
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user')));
  const [isOrganizer, setIsOrganizer] = useState(userInfo?.isOrganizer || false);

  useEffect(() => {
    const updateStateFromStorage = () => {
      const storedUserInfo = JSON.parse(localStorage.getItem('user'));
      setUserInfo(storedUserInfo);
      setIsOrganizer(storedUserInfo?.isOrganizer || false);
    };

    window.addEventListener('storage', updateStateFromStorage);
    updateStateFromStorage();

    return () => window.removeEventListener('storage', updateStateFromStorage);
  }, []);

  const logout = () => {
    localStorage.clear(); // Clears localStorage
    setUserInfo(null); // Resets the user info state
    setIsOrganizer(false); // Resets the organizer state
    navigate('/'); // Navigate to the homepage after logout
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-4">Eventify</h1>
        <Link to="/event-list" className="hover:text-gray-300 mr-4">Home</Link>
        <Link to="/about" className="hover:text-gray-300 mr-4">About</Link>
        <Link to="/contact" className="hover:text-gray-300 mr-4">Contact</Link>
        {isOrganizer && (
          <Link to="/organize-event" className="hover:text-gray-300">Organize Event</Link>
        )}
      </div>
      <div className="flex items-center">
        <Link to="/cart" className="hover:text-gray-300 mr-4">
          <FaShoppingCart />
        </Link>
        {userInfo ? (
          <>
            <div className="relative inline-block">
              <button onClick={() => setShowDropdown(!showDropdown)} className="focus:outline-none">
                {`Hello, ${userInfo.name}`} {/* Greeting message */}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link to="/tickets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Tickets</Link> {/* View Tickets Link */}
                  <button onClick={logout} className="text-sm text-gray-700 block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-gray-300 mr-4">
              <FaSignInAlt /> Login
            </Link>
            <Link to="/sign-up" className="hover:text-gray-300">
              <FaUserPlus /> Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
