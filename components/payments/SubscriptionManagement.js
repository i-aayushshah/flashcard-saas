// /components/payments/SubscriptionManagement.js
import React, { useEffect, useState } from 'react';
import { fetchUserSubscriptions } from '../../utils/stripe';

const SubscriptionManagement = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const loadSubscriptions = async () => {
      const userSubscriptions = await fetchUserSubscriptions();
      setSubscriptions(userSubscriptions);
    };

    loadSubscriptions();
  }, []);

  return (
    <div className="subscription-management">
      <h1>Manage Your Subscriptions</h1>
      {subscriptions.length === 0 ? (
        <p>You don't have any active subscriptions.</p>
      ) : (
        <ul>
          {subscriptions.map((subscription) => (
            <li key={subscription.id}>
              {subscription.plan.name} - {subscription.status}
              <button>Cancel Subscription</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubscriptionManagement;
