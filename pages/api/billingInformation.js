// /pages/api/billingInformation.js
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export default async (req, res) => {
  const { customerId } = req.body; // Assumes customerId is provided to fetch billing information

  try {
    const customer = await stripe.customers.retrieve(customerId);

    res.status(200).json(customer);
  } catch (error) {
    console.error('Error fetching billing information:', error);
    res.status(500).json({ error: 'Failed to fetch billing information' });
  }
};
