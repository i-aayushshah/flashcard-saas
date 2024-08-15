// /components/payments/BillingInformation.js
import React, { useEffect, useState } from 'react';
import { fetchUserBillingInfo, updateUserBillingInfo } from '../../utils/stripe';

const BillingInformation = () => {
  const [billingInfo, setBillingInfo] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const loadBillingInfo = async () => {
      const userBillingInfo = await fetchUserBillingInfo();
      setBillingInfo(userBillingInfo);
    };

    loadBillingInfo();
  }, []);

  const handleSave = async () => {
    await updateUserBillingInfo(billingInfo);
    setEditMode(false);
  };

  return (
    <div className="billing-information">
      <h1>Billing Information</h1>
      {editMode ? (
        <form>
          <input
            type="text"
            value={billingInfo.name}
            onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            value={billingInfo.address}
            onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
            placeholder="Address"
          />
          <input
            type="text"
            value={billingInfo.paymentMethod}
            onChange={(e) => setBillingInfo({ ...billingInfo, paymentMethod: e.target.value })}
            placeholder="Payment Method"
          />
          <button type="button" onClick={handleSave}>Save</button>
        </form>
      ) : (
        <div>
          <p>Name: {billingInfo.name}</p>
          <p>Address: {billingInfo.address}</p>
          <p>Payment Method: {billingInfo.paymentMethod}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default BillingInformation;
