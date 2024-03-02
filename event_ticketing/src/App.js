// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import LandingContent from './LandingContent';
import Signup from './Signup';
import EventList from './Eventlist';

function App() {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar component */}
      <Routes>
        <Route path="/" element={<LandingContent />} />
        <Route path="/sign-up" element={<Signup />} /> {/* Define the route for the signup page */}
        <Route path="/event-list" element={<EventList />} /> {/* Define the route for the event list page */}
      </Routes>
    </Router>
  );
}

export default App;
