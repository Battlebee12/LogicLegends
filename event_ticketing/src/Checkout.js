import React, { useState } from 'react';
import cardIcon from './Images/cards.jpeg'; 
import applePayIcon from './Images/apple_logo.jpeg';
import googlePayIcon from './Images/Google_Pay_Logo.png';

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
