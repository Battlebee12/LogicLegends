import React from 'react';
import { useTicketContext } from './TicketContext';

function ProfilePage() {
  const { ticketDetails } = useTicketContext(); // Access ticket details from the context
  const userData = localStorage.getItem('user');
  let user = null;

  if (userData) {
    try {
      user = JSON.parse(userData);
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }

  if (!user) {
    return <div>No user data found. Please log in.</div>;
  }

  let ticketsComponent = null;

  if (ticketDetails) {
    ticketsComponent = (
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your Tickets</h2>
        <div className="border-b border-gray-200 py-4">
          <div className="text-lg font-semibold">{ticketDetails.eventName}</div>
          <div>Date: {ticketDetails.eventDate}</div>
          <div>Location: {ticketDetails.location}</div>
          <div>Quantity: {ticketDetails.quantity}</div>
          <div>Total Price: ${ticketDetails.totalPrice}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">{user.name}</div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1">{user.email}</div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Postal Code</label>
            <div className="mt-1">{user.zipCode}</div>

            
          </div>
          
         
          {/* Add more fields as needed */}
        </div>
      </div>
      {ticketsComponent}
    </div>
  );
}

export default ProfilePage;
