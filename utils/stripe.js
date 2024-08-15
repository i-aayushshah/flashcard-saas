import axios from 'axios';

const STRIPE_API_KEY = 'YOUR_STRIPE_API_KEY';
const STRIPE_API_URL = 'https://api.stripe.com/v1/';

export const createCheckoutSession = async (lineItems) => {
  try {
    const response = await axios.post(
      '/api/createCheckoutSession',
      { lineItems },
      {
        headers: {
          'Authorization': `Bearer ${STRIPE_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};
