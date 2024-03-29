import React from 'react';
import { useTicketContext } from './TicketContext';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

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
      <div className="mt-8 bg-blue-50 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">Your Last Purchached Ticket</h2>
        <div className="border-b border-blue-200 py-4">
          <div className="text-lg font-semibold text-blue-700">{ticketDetails.eventName}</div>
          <div className="text-blue-600">Date: {ticketDetails.eventDate}</div>
          <div className="text-blue-600">Location: {ticketDetails.location}</div>
          <div className="text-blue-600">Quantity: {ticketDetails.quantity}</div>
          <div className="text-blue-600">Total Price: ${ticketDetails.totalPrice}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6 text-blue-900">Profile</h1>
      <div className="bg-blue-50 shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-blue-800">Name</label>
            <div className="mt-1 text-blue-900">{user.name}</div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-blue-800">Email</label>
            <div className="mt-1 text-blue-900">{user.email}</div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-blue-800">Postal Code</label>
            <div className="mt-1 text-blue-900">{user.zipCode}</div>
          </div>
          {/* Add more fields as needed */}
        </div>
      </div>
      {/* Display the tickets component */}
      {ticketsComponent}
      {/* Additional functionality */}
      <div className="mt-8">
        <Link to="/edit-profile" className="text-blue-500 hover:underline">Edit Profile</Link>
      </div>
      <div className="mt-4">
        <Link to="/change-password" className="text-blue-500 hover:underline">Change Password</Link>
      </div>
    </div>
    </div>
  );
}

export default ProfilePage;
