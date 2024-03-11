// PaymentPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationPage from './ConfirmationPage';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const handlePayment = (method) => {
    setPaymentMethod(method);
    // Implement your payment logic here
    // For demonstration, set payment confirmation to true
    setIsPaymentConfirmed(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Select Payment Method</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {/* Payment method options */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            border: paymentMethod === 'card' ? '2px solid #ff6600' : 'none',
          }}
          onClick={() => handlePayment('card')}
        >
          <span>Card</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            border: paymentMethod === 'apple-pay' ? '2px solid #ff6600' : 'none',
          }}
          onClick={() => handlePayment('apple-pay')}
        >
          <span>Apple Pay</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            border: paymentMethod === 'google-pay' ? '2px solid #ff6600' : 'none',
          }}
          onClick={() => handlePayment('google-pay')}
        >
          <span>Google Pay</span>
        </div>
      </div>
      {/* Pay Now button */}
      <button
        onClick={() => handlePayment(paymentMethod)}
        // Disable button if payment method is not selected or payment is already confirmed
        disabled={!paymentMethod || isPaymentConfirmed}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: paymentMethod ? '#ff6600' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: paymentMethod ? 'pointer' : 'not-allowed',
        }}
      >
        Pay Now
      </button>
      {/* Navigate to ConfirmationPage when payment is confirmed */}
      {isPaymentConfirmed && <Link to="/confirmation">Proceed to Confirmation</Link>}
    </div>
  );
};

export default PaymentPage;
