// import React, { useState, useEffect } from 'react';

// function Tickets() {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     // Fetch tickets data for the logged-in user
//     const userData = localStorage.getItem('user');
//     let user = null;

//     if (userData) {
//       try {
//         user = JSON.parse(userData);
//         // Assuming tickets are stored in the user object
//         setTickets(user.tickets || []);
//       } catch (error) {
//         console.error('Error parsing user data:', error);
//       }
//     }
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Your Tickets</h1>
//       {tickets.length === 0 ? (
//         <p>No tickets found.</p>
//       ) : (
//         <ul>
//           {tickets.map((ticket, index) => (
//             <li key={index}>
//               {/* Assuming ticket data contains relevant information */}
//               <p>{`Event: ${ticket.eventName}`}</p>
//               <p>{`Date: ${ticket.date}`}</p>
//               <p>{`Location: ${ticket.location}`}</p>
//               {/* Add more details here based on your ticket data */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Tickets;

import React from 'react';
import Ticket from "./components/ticket"; // Import the Ticket component
import Navbar from './Navbar';

const ViewTickets = () => {
  // Retrieve purchased tickets from local storage or Redux store
  const purchasedTickets = JSON.parse(localStorage.getItem('purchasedTickets')) || [];

  return (
    <div>

    <Navbar/>
      <div className="view-tickets">
        <h2 className="text-3xl p-4 font-bold mb-6 text-center">Your Purchased Tickets</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {purchasedTickets.length === 0 ? (
            <p className="text-lg text-center">No tickets purchased yet.</p>
          ) : (
            purchasedTickets.map((ticket, index) => (
              <TicketCard key={index} {...ticket} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const TicketCard = ({ eventName, eventDate, quantity, totalPrice, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{eventName}</h3>
      <p className="mb-2"><strong>Date:</strong> {eventDate}</p>
      <p className="mb-2"><strong>Location:</strong> {location}</p>
      <p className="mb-2"><strong>Quantity:</strong> {quantity}</p>
      <p className="mb-2"><strong>Total Price:</strong> ${totalPrice}</p>
    </div>
  );
};

export const updatePurchasedTickets = (newTicket) => {
  const purchasedTickets = JSON.parse(localStorage.getItem('purchasedTickets')) || [];
  const updatedTickets = [...purchasedTickets, newTicket];
  localStorage.setItem('purchasedTickets', JSON.stringify(updatedTickets));
};

export default ViewTickets;

