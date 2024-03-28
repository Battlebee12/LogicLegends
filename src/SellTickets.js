import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SellTickets() {
  const [ticketDetails, setTicketDetails] = useState({
    eventName: '',
    ticketType: '',
    price: '',
    quantity: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails({ ...ticketDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission here, e.g., send data to the server or store in localStorage
    console.log('Ticket details:', ticketDetails);
    // After submitting, navigate to the desired page
    navigate('/waiting');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Sell Tickets</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="eventName" className="block text-sm font-semibold mb-2">Event Name</label>
          <input type="text" id="eventName" name="eventName" value={ticketDetails.eventName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="ticketType" className="block text-sm font-semibold mb-2">Ticket Type</label>
          <input type="text" id="ticketType" name="ticketType" value={ticketDetails.ticketType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-semibold mb-2">Price</label>
          <input type="number" id="price" name="price" value={ticketDetails.price} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-semibold mb-2">Quantity</label>
          <input type="number" id="quantity" name="quantity" value={ticketDetails.quantity} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">List Tickets</button>
      </form>
    </div>
  );
}

export default SellTickets;
