import React, { useState } from 'react';
import { useTicketContext } from './TicketContext';

function ProfilePage() {
  const { ticketDetails } = useTicketContext();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [editData, setEditData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    country: user?.country || '',
    zipCode: user?.zipCode || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // Handle form submission using the native fetch API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/updateProfile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: editData.email,
          firstName: editData.firstName,
          lastName: editData.lastName,
          country: editData.country,
          zipCode: editData.zipCode,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Update was successful
        const updatedUser = { ...user, ...editData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        alert("Profile updated successfully.");
      } else {
        // Handle other statuses
        alert(data.message || "Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert("An error occurred. Please try again.");
    }
  };

  if (!user) {
    return <div>No user data found. Please log in.</div>;
  }

  let ticketsComponent = ticketDetails && (
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

  return (
    <div className="max-w-4xl mx-auto py-10">
    <h1 className="text-3xl font-semibold mb-6">Profile</h1>
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            className="mt-1 block w-full"
            name="firstName"
            type="text"
            value={editData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            className="mt-1 block w-full"
            name="lastName"
            type="text"
            value={editData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            className="mt-1 block w-full"
            name="email"
            type="email"
            value={editData.email}

          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            className="mt-1 block w-full"
            name="country"
            type="text"
            value={editData.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            className="mt-1 block w-full"
            name="zipCode"
            type="text"
            value={editData.zipCode}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Save Changes
      </button>
    </form>
    {ticketsComponent}
  </div>
  );
}

export default ProfilePage;
