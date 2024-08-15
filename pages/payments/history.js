// /pages/payments/history.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await axios.get('/api/paymentHistory', {
          params: { userId: 'your-user-id' }, // Replace with actual user ID logic
        });
        setPayments(response.data.data);
      } catch (err) {
        setError('Failed to fetch payment history');
      }
    };

    fetchPaymentHistory();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Payment History</h1>
      {payments.length > 0 ? (
        <ul>
          {payments.map(payment => (
            <li key={payment.id}>
              {payment.description} - {payment.amount} - {payment.created}
            </li>
          ))}
        </ul>
      ) : (
        <p>No payment history available.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
