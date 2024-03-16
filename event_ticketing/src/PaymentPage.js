import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardIcon from './path/to/cardIcon.png'; // Adjust the path accordingly
import applePayIcon from './path/to/applePayIcon.png'; // Adjust the path accordingly
import googlePayIcon from './path/to/googlePayIcon.png'; // Adjust the path accordingly

const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    // For now, navigate to the confirmation page
    navigate('/confirmation'); // Navigate to the confirmation page
  };

  return (
    <div>
      <h2>Select Payment Method</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        {/* Payment method selection buttons */}
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
      {/* Checkout button */}
      <button onClick={handleCheckout} disabled={!paymentMethod} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Pay Now
      </button>
    </div>
  );
};

// Style for the payment method buttons
const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

// Style for the icons within the buttons
const iconStyle = {
  width: '24px',
  marginRight: '8px',
};

export default PaymentPage;
