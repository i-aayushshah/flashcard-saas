// /pages/api/paymentHistory.js
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export default async (req, res) => {
  const { userId } = req.query; // Assumes userId is provided to filter payment history

  try {
    const payments = await stripe.paymentIntents.list({
      customer: userId,
      limit: 100,
    });

    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payment history:', error);
    res.status(500).json({ error: 'Failed to fetch payment history' });
  }
};
