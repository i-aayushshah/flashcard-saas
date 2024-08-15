// /components/payments/Checkout.js
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const router = useRouter();
  const { plan } = router.query;

  useEffect(() => {
    const handleCheckout = async () => {
      const stripe = await stripePromise;

      const response = await fetch('/api/createCheckoutSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planId: plan }),
      });

      const session = await response.json();

      await stripe.redirectToCheckout({ sessionId: session.id });
    };

    handleCheckout();
  }, [plan]);

  return <div>Redirecting to checkout...</div>;
};

export default Checkout;
