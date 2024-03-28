import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
    updateTotalPrice(savedCartItems);
  }, []);

  const updateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(index)} className="text-red-500">Remove</button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8">
              <p className="text-lg font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
              <div>
                <Link to="/event-list" className="text-blue-500 mr-4">Shop More</Link>
                <Link to="/checkout/${id}" className="bg-blue-500 text-white py-2 px-4 rounded">Continue to Checkout</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
