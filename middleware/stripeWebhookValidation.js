import { buffer } from 'micro';
import crypto from 'crypto';
import { STRIPE_WEBHOOK_SECRET } from '../utils/stripe';

const stripeWebhookValidation = (handler) => async (req, res) => {
  if (req.method === 'POST') {
    const sig = req.headers['stripe-signature'];
    const buf = await buffer(req);

    let event;

    try {
      event = crypto.webcrypto.subtle.verify(
        'sha256',
        Buffer.from(buf),
        Buffer.from(sig),
        Buffer.from(STRIPE_WEBHOOK_SECRET)
      );
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    return handler(req, res, event);
  }

  return res.status(405).end(); // Method Not Allowed
};

export default stripeWebhookValidation;
