// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import LandingContent from './LandingContent';
import Signup from './Signup';
import EventList from './Eventlist';
import About from './about';
import Contact from './contact';
import EventDetails from './EventDetails';
function App() {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar component */}
      <Routes>
      <Route path="/event-list" element={<EventList />} />
        <Route path="/" element={<LandingContent />} />
        <Route path="/sign-up" element={<Signup />} /> 
        <Route path= "/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/event-details:id"element={<EventDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
