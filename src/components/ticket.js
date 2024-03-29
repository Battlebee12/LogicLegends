import React from 'react';

const Ticket = ({ eventName, eventDate, quantity, totalPrice, location }) => {
  return (
    <div className="rounded-lg bg-white shadow-md p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{eventName}</h3>
      <p><strong>Date:</strong> {eventDate}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Quantity:</strong> {quantity}</p>
      <p><strong>Total Price:</strong> ${totalPrice}</p>
    </div>
  );
};

export default Ticket;
