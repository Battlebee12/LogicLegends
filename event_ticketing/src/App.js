// src/App.js
import React from 'react';
import Navbar from './Navbar';
import './Navbar.css'; // Import Navbar.css for styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="landing-page">
        <header>
          <h1>Welcome to My Website</h1>
          <p>Discover amazing things</p>
        </header>
        {/* Add other sections of your landing page here */}
      </div>
    </div>
  );
}

export default App;
