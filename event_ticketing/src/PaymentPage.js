import React, { useState } from 'react';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    // For now, navigate to the confirmation page
    window.location.href = '/confirmation';
  };

  return (
    <div>
      <h2>Select Payment Method</h2>
      {/* Payment method selection buttons */}
      <button onClick={() => handlePayment('card')}>Card</button>
      <button onClick={() => handlePayment('apple-pay')}>Apple Pay</button>
      <button onClick={() => handlePayment('google-pay')}>Google Pay</button>
      {/* Checkout button */}
      <button
        onClick={handleCheckout}
        disabled={!paymentMethod}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
