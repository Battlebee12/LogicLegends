// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import cardIcon from './path/to/cardIcon.png'; // Adjust the path accordingly
// import applePayIcon from './path/to/applePayIcon.png'; // Adjust the path accordingly
// import googlePayIcon from './path/to/googlePayIcon.png'; // Adjust the path accordingly

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handlePayment = (method) => {
//     setPaymentMethod(method);
//   };

//   const handleCheckout = () => {
//     // Implement your checkout logic here
//     // For now, navigate to the confirmation page
//     navigate('/confirmation'); // Navigate to the confirmation page
//   };

//   return (
//     <div>
//       <h2>Select Payment Method</h2>
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
//         {/* Payment method selection buttons */}
//         <button onClick={() => handlePayment('card')} style={buttonStyle}>
//           <img src={cardIcon} alt="Card Payment" style={iconStyle} /> Card
//         </button>
//         <button onClick={() => handlePayment('apple-pay')} style={buttonStyle}>
//           <img src={applePayIcon} alt="Apple Pay" style={iconStyle} /> Apple Pay
//         </button>
//         <button onClick={() => handlePayment('google-pay')} style={buttonStyle}>
//           <img src={googlePayIcon} alt="Google Pay" style={iconStyle} /> Google Pay
//         </button>
//       </div>
//       {/* Checkout button */}
//       <button onClick={handleCheckout} disabled={!paymentMethod} style={{ padding: '10px 20px', fontSize: '16px' }}>
//         Pay Now
//       </button>
//     </div>
//   );
// };

// // Style for the payment method buttons
// const buttonStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   padding: '10px 20px',
//   fontSize: '16px',
//   cursor: 'pointer',
// };

// // Style for the icons within the buttons
// const iconStyle = {
//   width: '24px',
//   marginRight: '8px',
// };

// export default PaymentPage;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cardIcon from './Images/cards.jpeg'; 
import applePayIcon from './Images/apple_logo.jpeg';
import googlePayIcon from './Images/Google_Pay_Logo.png';
import { updatePurchasedTickets } from './ViewTickets';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    // const { ticketDetails } = location.state || {};
    // const ticketDetails1 = {
    //   eventId: ticketDetails.eventId,
    //   eventName: ticketDetails.eventName,
    //   eventDate: ticketDetails.eventDate,
    //   quantity: ticketDetails.quantity,
    //   totalPrice: ticketDetails.totalPrice,
    //   location: ticketDetails.location
    // };

    // console.log('Ticket Details at payment page:', ticketDetails1);
    // Retrieve items from cart stored in local storage
   // Retrieve cart items from local storage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Retrieve purchased tickets from local storage
const purchasedTickets = JSON.parse(localStorage.getItem('purchasedTickets')) || [];

// Format cart items to match the format of purchased tickets
const formattedCartItems = cartItems.map(item => ({
  eventId: item.id,
  eventName: item.name,
  eventDate: item.date, // You may need to add event date if available
  quantity: item.quantity,
  totalPrice: item.price * item.quantity,
  location: item.location // You may need to add location if available
}));

// Combine formatted cart items with existing purchased tickets
const updatedTickets = [...purchasedTickets, ...formattedCartItems];

// Update localStorage with updated purchasedTickets
localStorage.setItem('purchasedTickets', JSON.stringify(updatedTickets));

// Navigate to the cart confirmation page
navigate('/cart-conformation');

  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold my-4">Select Payment Method</h2>
      <div className="flex flex-col gap-4 mb-8">
        {/* Payment method selection buttons */}
        <button 
          onClick={() => handlePayment('card')} 
          className={`flex items-center justify-center px-4 py-2 bg-gray-200 rounded-md shadow ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200'} hover:bg-blue-500 hover:text-white transition-colors`}
        >
          <img src={cardIcon} alt="Card Payment" className="w-6 h-6 mr-2" /> Card
        </button>
        <button 
          onClick={() => handlePayment('apple-pay')} 
          className={`flex items-center justify-center px-4 py-2 rounded-md shadow ${paymentMethod === 'apple-pay' ? 'bg-blue-500 text-white' : 'bg-gray-200'} hover:bg-blue-500 hover:text-white transition-colors`}
        >
          <img src={applePayIcon} alt="Apple Pay" className="w-6 h-6 mr-2" /> Apple Pay
        </button>
        <button 
          onClick={() => handlePayment('google-pay')} 
          className={`flex items-center justify-center px-4 py-2 rounded-md shadow ${paymentMethod === 'google-pay' ? 'bg-blue-500 text-white' : 'bg-gray-200'} hover:bg-blue-500 hover:text-white transition-colors`}
        >
          <img src={googlePayIcon} alt="Google Pay" className="w-6 h-6 mr-2" /> Google Pay
        </button>
      </div>
      {/* Checkout button */}
      <button 
        onClick={handleCheckout} 
        disabled={!paymentMethod} 
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;


