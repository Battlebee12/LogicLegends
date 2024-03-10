import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-tropical-blue-950 text-white p-4">
      <div className=" mx-auto ml-5 mr-5 flex space-x-6 justify-between items-center">
        <h1 className="text-2xl font-bold">Event Ticketing</h1>
        
        
        <ul className="flex space-x-4">
          <li><Link to="/event-list" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/" className="hover:underline">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
