// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import LandingContent from './LandingContent';
import Signup from './Signup';
import EventList from './Eventlist';
import About from './about';
import Contact from './contact';
function App() {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar component */}
      <Routes>
      <Route path="/event-list" element={<EventList />} />
        <Route path="/" element={<LandingContent />} />
        <Route path="/sign-up" element={<Signup />} /> {/* Define the route for the signup page */}
        {/* Define the route for the event list page */}
        <Route path= "/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
