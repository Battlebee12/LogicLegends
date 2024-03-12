import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingContent from './LandingContent';
import Signup from './Signup';
import EventList from './Eventlist';
import About from './about';
import Contact from './contact';
import EventDetails from './EventDetails';
import OrganizeEvent from './Organize';
import AdminLogin from './AdminLogin';

import ConfirmationPage from './ConfirmationPage';
import PaymentPage from './Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/" element={<LandingContent />} />
        <Route path="/sign-up" element={<Signup />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/checkout/:id" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/organize-event" element={<OrganizeEvent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
