import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3002/events/${id}`);
        if (response.ok) {
          const eventData = await response.json();
          setEventDetails(eventData);
        } else {
          console.error('Error fetching event details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };
    fetchEventDetails();
  }, [id]);

  const handleBuyNow = () => {
    navigate(`/checkout/${id}`);
  };

  const handleAddToCart = () => {
    // Check if eventDetails is not null and quantity is valid
    if (eventDetails && quantity > 0) {
      const cartItem = {
        id: eventDetails.id,
        name: eventDetails.name,
        price: eventDetails.ticket_price,
        quantity: quantity
      };
      // Retrieve existing cart items from local storage
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      // Add the new item to the cart
      const updatedCartItems = [...existingCartItems, cartItem];
      // Store updated cart items in local storage
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      // Redirect to the cart page
      navigate('/cart');
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const totalPrice = eventDetails ? eventDetails.ticket_price * quantity : 0;

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">{eventDetails.name}</h2>
        <p className="text-lg mb-6">{eventDetails.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="mb-2"><strong>Date:</strong> {formatDate(eventDetails.date)}</p>
            <p className="mb-2"><strong>Venue:</strong> {eventDetails.venue}</p>
            <p className="mb-2"><strong>Price per ticket:</strong> ${eventDetails.ticket_price}</p>
            <p className="mb-2"><strong>Tickets available:</strong> {eventDetails.tickets_available}</p>
            <div className="mb-2">
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" value={quantity} min="1" onChange={handleQuantityChange} />
            </div>
            <p className="mb-2"><strong>Total Price:</strong> ${totalPrice}</p>
          </div>
          <div className="text-right">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleBuyNow}>Buy Now</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
        {/* Total price and Buy Now button */}
      </div>
    </div>
  );
};

export default EventDetails;
