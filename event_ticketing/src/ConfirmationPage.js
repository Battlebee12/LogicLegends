import React from 'react';
import Navbar from './Navbar';

const ConfirmationPage = () => {
  // Dummy event data (replace with actual data fetching or storage)
  const eventData = {
    title: 'Event Name',
    date: 'March 20, 2024',
    venue: 'Venue Name',
    location: 'Location Name',
    // Add more details if needed
  };

  // Dummy order summary data (replace with actual order data)
  const orderSummary = {
    tickets: 2,
    totalPrice: 100, // Total price of the order
    // Add more details if needed
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Confirmation Page</h2>
        {/* Event details */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Event Details</h3>
          <p className="mb-2">{eventData.title}</p>
          <p className="mb-2">Date: {eventData.date}</p>
          <p className="mb-2">Venue: {eventData.venue}</p>
          <p className="mb-2">Location: {eventData.location}</p>
        </div>
        {/* Order summary */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <p className="mb-2">Tickets: {orderSummary.tickets}</p>
          <p className="mb-2">Total Price: ${orderSummary.totalPrice}</p>
        </div>
        {/* Confirmation message */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Confirmation</h3>
          <p className="text-green-600">Your order has been confirmed. Thank you!</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
