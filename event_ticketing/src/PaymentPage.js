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

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = (method) => {
    console.log("Handled payment");
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    console.log("Entered handleCheckout");
    const { ticketDetails } = location.state || {};

    const ticketDetails1 = {
      eventId: ticketDetails.eventId,
      eventName: ticketDetails.eventName,
      eventDate: ticketDetails.eventDate,
      quantity: ticketDetails.quantity,
      totalPrice: ticketDetails.totalPrice,
      location: ticketDetails.location
    };

    console.log('Ticket Details at payment page:', ticketDetails1);

    navigate('/confirmation', { state: { ticketDetails1 } });
  };

  const handleAlternativeCheckout = () => {
    console.log("Alternative checkout button clicked");
    handleCheckout(); // Call handleCheckout when the new button is clicked
  };

  return (
    <div>
      <h2>Select Payment Method</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => handlePayment('card')} style={buttonStyle}>
          <img src={cardIcon} alt="Card Payment" style={iconStyle} /> Card
        </button>
        <button onClick={() => handlePayment('apple-pay')} style={buttonStyle}>
          <img src={applePayIcon} alt="Apple Pay" style={iconStyle} /> Apple Pay
        </button>
        <button onClick={() => handlePayment('google-pay')} style={buttonStyle}>
          <img src={googlePayIcon} alt="Google Pay" style={iconStyle} /> Google Pay
        </button>
      </div>
      <button onClick={handleCheckout} disabled={!paymentMethod} style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}>
        Pay Now
      </button>
      {/* New button for alternative checkout */}
      <button onClick={handleAlternativeCheckout} disabled={!paymentMethod} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Alternative Checkout
      </button>
    </div>
  );
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

const iconStyle = {
  width: '24px',
  marginRight: '8px',
};

export default PaymentPage;

