// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingContent from './LandingContent';
import EventList from './Eventlist'; // Corrected import to match the actual file name

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingContent />} />
        <Route path="/event-list" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
