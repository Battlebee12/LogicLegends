import React, { useState, useEffect } from 'react';

function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets data for the logged-in user
    const userData = localStorage.getItem('user');
    let user = null;

    if (userData) {
      try {
        user = JSON.parse(userData);
        // Assuming tickets are stored in the user object
        setTickets(user.tickets || []);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Tickets</h1>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <ul>
          {tickets.map((ticket, index) => (
            <li key={index}>
              {/* Assuming ticket data contains relevant information */}
              <p>{`Event: ${ticket.eventName}`}</p>
              <p>{`Date: ${ticket.date}`}</p>
              <p>{`Location: ${ticket.location}`}</p>
              {/* Add more details here based on your ticket data */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tickets;
