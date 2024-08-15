// /components/payments/PaymentSuccess.js
import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="payment-success">
      <h1>Payment Successful</h1>
      <p>Thank you for your purchase! Your subscription is now active.</p>
      <a href="/dashboard">Go to Dashboard</a>
    </div>
  );
};

export default PaymentSuccess;
