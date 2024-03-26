// import React from 'react';
// import Navbar from './Navbar';

// const ConfirmationPage = () => {
//   // Dummy event data (replace with actual data fetching or storage)
//   const eventData = {
//     title: 'Event Name',
//     date: 'March 20, 2024',
//     venue: 'Venue Name',
//     location: 'Location Name',
//     // Add more details if needed
//   };

//   // Dummy order summary data (replace with actual order data)
//   const orderSummary = {
//     tickets: 2,
//     totalPrice: 100, // Total price of the order
//     // Add more details if needed
//   };

  

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />

//       <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-6">Confirmation Page</h2>
//         {/* Event details */}
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">Event Details</h3>
//           <p className="mb-2">{eventData.title}</p>
//           <p className="mb-2">Date: {eventData.date}</p>
//           <p className="mb-2">Venue: {eventData.venue}</p>
//           <p className="mb-2">Location: {eventData.location}</p>
//         </div>
//         {/* Order summary */}
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
//           <p className="mb-2">Tickets: {orderSummary.tickets}</p>
//           <p className="mb-2">Total Price: ${orderSummary.totalPrice}</p>
//         </div>
//         {/* Confirmation message */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Confirmation</h3>
//           <p className="text-green-600">Your order has been confirmed. Thank you!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPage;
// import React from 'react';
// import Navbar from './Navbar';
// import { useLocation } from 'react-router-dom';

// const ConfirmationPage = () => {
//   const location = useLocation();
//   const { ticketDetails } = location.state || {};
//   console.log("in confirmation");
//   console.log(ticketDetails);

//   if (!ticketDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-6">Confirmation Page</h2>
//         <div>
//           <h3>Event Details</h3>
//           <p>Event ID: {ticketDetails.eventId}</p>
//           <p>Name: {ticketDetails.eventName}</p>
//           <p>Date: {ticketDetails.eventDate}</p>
//           <p>Quantity: {ticketDetails.quantity}</p>
//           <p>Total Price: ${ticketDetails.totalPrice}</p>
//           {/* Add more ticket details if needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPage;

import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // timeZone: 'UTC' // You can remove timeZone if you want to display the date in local time
  });
};

const ConfirmationPage = () => {
  const location = useLocation();
  const { ticketDetails1 } = location.state || {};
  console.log("in confirmation");
  console.log(ticketDetails1);

  if (!ticketDetails1) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Confirmation Page</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Event Details</h3>
          <p className="mb-2"><strong>Event Name:</strong> {ticketDetails1.eventName}</p>
          <p className="mb-2"><strong>Date:</strong> {formatDate(ticketDetails1.eventDate)}</p>
          {/* <p className="mb-2"><strong>Venue:</strong> {ticketDetails.venue}</p> */}
          <p className="mb-2"><strong>Location:</strong> {ticketDetails1.location}</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <p className="mb-2"><strong>Tickets:</strong> {ticketDetails1.quantity}</p>
          <p className="mb-2"><strong>Total Price:</strong> ${ticketDetails1.totalPrice}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Confirmation</h3>
          <p className="text-green-600">Your order has been confirmed. Thank you!</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;


