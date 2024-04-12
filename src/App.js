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
import ProfilePage from './Profile';
import { TicketProvider } from './TicketContext';


import ConfirmationPage from './ConfirmationPage';
import PaymentPage from './Checkout';
import PaymentPageCart from './PaymentPage';
import Tickets from './ViewTickets';
import Cart from './Cart';
import AdminEvents from './AdminEvents';
import SellTickets from './SellTickets';
import Waiting from './waiting';
import CartConformation from "./TicketConfirmationCart"
import Pending_event from "./pending_event_page"


function App() {
  return (
    <TicketProvider>
      <Router>
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/event-list" element={<EventList />} />
          <Route path="/" element={<LandingContent />} />
          <Route path="/sign-up" element={<Signup />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/checkout/:id" element={<PaymentPageCart />} />
          <Route path="/confirmation/:eventId" element={<ConfirmationPage />} />
          <Route path="/organize-event" element={<OrganizeEvent/>}/>
          <Route path= "/profile"element = {<ProfilePage/>}/>
          <Route path= "/tickets"element = {<Tickets/>}/>
          <Route path= "/cart"element = {<Cart/>}/>
          <Route path ="/admin-login" element = {<AdminLogin/>}/>
          <Route path ="/admin-events" element = {<AdminEvents/>}/>
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="sell-tickets" element={<SellTickets/>}/>
          <Route path="/waiting" element={<Waiting/>}/>
          <Route path="/cart-conformation" element={<CartConformation/>}/>
          <Route path="/event-pending" element={<Pending_event/>}/>
          
        </Routes>
      </Router>
    </TicketProvider>
  );
}
export default App;
