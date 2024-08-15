// /components/payments/Pricing.js
import React from 'react';
import { useRouter } from 'next/router';

const Pricing = () => {
  const router = useRouter();

  const handleCheckout = (planId) => {
    // Redirect to Checkout page with selected plan ID
    router.push(`/payments/checkout?plan=${planId}`);
  };

  return (
    <div className="pricing-container">
      <h1>Our Pricing Plans</h1>
      <div className="plans">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p>$9.99/month</p>
          <button onClick={() => handleCheckout('basic-plan-id')}>Choose Plan</button>
        </div>
        <div className="plan">
          <h2>Pro Plan</h2>
          <p>$19.99/month</p>
          <button onClick={() => handleCheckout('pro-plan-id')}>Choose Plan</button>
        </div>
        <div className="plan">
          <h2>Enterprise Plan</h2>
          <p>Contact Us</p>
          <button onClick={() => handleCheckout('enterprise-plan-id')}>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
