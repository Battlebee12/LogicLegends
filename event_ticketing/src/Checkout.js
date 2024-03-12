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
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">Select Payment Method</h2>
      <div className="flex justify-between space-x-4">
        {/* Payment method options as cards */}
        <div
          className={`payment-card ${paymentMethod === 'card' && 'selected'}`}
          onClick={() => handlePayment('card')}
        >
          <span className="text-lg font-semibold tracking-wide">Card</span>
        </div>
        <div
          className={`payment-card ${paymentMethod === 'apple-pay' && 'selected'}`}
          onClick={() => handlePayment('apple-pay')}
        >
          <span className="text-lg font-semibold tracking-wide">Apple Pay</span>
        </div>
        <div
          className={`payment-card ${paymentMethod === 'google-pay' && 'selected'}`}
          onClick={() => handlePayment('google-pay')}
        >
          <span className="text-lg font-semibold tracking-wide">Google Pay</span>
        </div>
      </div>
      {/* Pay Now button */}
      <button
        onClick={() => handlePayment(paymentMethod)}
        disabled={!paymentMethod || isPaymentConfirmed}
        className={`mt-6 py-2 px-4 bg-${paymentMethod ? 'orange' : 'gray'}-500 text-white rounded-md cursor-${paymentMethod ? 'pointer' : 'not-allowed'} hover:bg-${paymentMethod ? 'orange' : 'gray'}-600 hover:shadow-lg transition duration-300`}
      >
        {isPaymentConfirmed ? 'Payment Confirmed' : 'Pay Now'}
      </button>
      {/* Navigate to ConfirmationPage when payment is confirmed */}
      {isPaymentConfirmed && (
        <Link
          to="/confirmation"
          className="block mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Proceed to Confirmation
        </Link>
      )}
    </div>
  );
};

export default PaymentPage;
