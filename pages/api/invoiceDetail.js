// /pages/api/invoiceDetail.js
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export default async (req, res) => {
  const { invoiceId } = req.query; // Assumes invoiceId is provided to fetch detailed invoice data

  try {
    const invoice = await stripe.invoices.retrieve(invoiceId);

    res.status(200).json(invoice);
  } catch (error) {
    console.error('Error fetching invoice details:', error);
    res.status(500).json({ error: 'Failed to fetch invoice details' });
  }
};
