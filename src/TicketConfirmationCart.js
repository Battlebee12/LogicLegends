import React, { useEffect, useState } from 'react';
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
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  console.log("in confirmation");
  console.log(cartItems);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Confirmation Page</h2>
        {cartItems.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Event Details</h3>
              {cartItems.map((item, index) => (
                <div key={index} className="mb-2">
                  <p><strong>Event Name:</strong> {item.name}</p>
                  <p><strong>Date:</strong> {formatDate(item.date)}</p>
                  <p><strong>Location:</strong> {item.location}</p>
                </div>
              ))}
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
              <p className="mb-2"><strong>Tickets:</strong> {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
              <p className="mb-2"><strong>Total Price:</strong> ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Confirmation</h3>
              <p className="text-green-600">Your order has been confirmed. Thank you!</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;
