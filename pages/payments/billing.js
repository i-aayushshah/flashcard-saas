// /pages/payments/billing.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const BillingInformation = () => {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBillingInformation = async () => {
      try {
        const response = await axios.post('/api/billingInformation', {
          customerId: 'your-customer-id', // Replace with actual customer ID logic
        });
        setCustomer(response.data);
      } catch (err) {
        setError('Failed to fetch billing information');
      }
    };

    fetchBillingInformation();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Billing Information</h1>
      {customer ? (
        <div>
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          <p>Payment Method: {customer.payment_method}</p>
          {/* Add more fields as necessary */}
        </div>
      ) : (
        <p>No billing information available.</p>
      )}
    </div>
  );
};

export default BillingInformation;
