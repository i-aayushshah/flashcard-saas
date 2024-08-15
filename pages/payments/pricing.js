// /pages/payments/pricing.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const response = await axios.get('/api/pricingPlans');
        setPlans(response.data.plans);
      } catch (err) {
        setError('Failed to load pricing plans');
      }
    };

    fetchPricingPlans();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pricing Plans</h1>
      {error && <p>{error}</p>}
      {plans.length > 0 ? (
        <div>
          {plans.map(plan => (
            <div key={plan.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
              <p>${plan.price} / {plan.interval}</p>
              <button onClick={() => window.location.href = plan.checkoutUrl}>Subscribe</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading pricing plans...</p>
      )}
    </div>
  );
};

export default Pricing;
