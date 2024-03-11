// ConfirmationPage.js
import React from 'react';

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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Confirmation Page</h2>
      {/* Event details */}
      <div>
        <h3>Event Details</h3>
        <p>{eventData.title}</p>
        <p>Date: {eventData.date}</p>
        <p>Venue: {eventData.venue}</p>
        <p>Location: {eventData.location}</p>
      </div>
      {/* Order summary */}
      <div>
        <h3>Order Summary</h3>
        <p>Tickets: {orderSummary.tickets}</p>
        <p>Total Price: ${orderSummary.totalPrice}</p>
      </div>
      {/* Confirmation message */}
      <div>
        <h3>Confirmation</h3>
        <p>Your order has been confirmed. Thank you!</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
