// Waiting.js

import React from 'react';
import { Link } from 'react-router-dom';

function Waiting() {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your request is being reviewed</h2>
      <p>Please wait while your ticket listing request is being reviewed.</p>
      <Link to="/event-list" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Explore Other Events</Link>
    </div>
  );
}

export default Waiting;
