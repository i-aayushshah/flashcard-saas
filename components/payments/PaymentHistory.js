// /components/payments/PaymentHistory.js
import React, { useEffect, useState } from 'react';
import { fetchUserPaymentHistory } from '../../utils/stripe';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const loadPayments = async () => {
      const paymentHistory = await fetchUserPaymentHistory();
      setPayments(paymentHistory);
    };

    loadPayments();
  }, []);

  return (
    <div className="payment-history">
      <h1>Your Payment History</h1>
      {payments.length === 0 ? (
        <p>No payment history available.</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              {payment.amount / 100} {payment.currency.toUpperCase()} - {new Date(payment.created * 1000).toLocaleDateString()}
              <a href={`/payments/invoice/${payment.invoice}`} target="_blank" rel="noopener noreferrer">View Invoice</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
