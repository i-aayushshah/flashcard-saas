// /pages/payments/cancel.js
import { useRouter } from 'next/router';

const Cancel = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Payment Canceled</h1>
      <p>Your payment was canceled. If you need assistance, please contact support.</p>
      <button onClick={() => router.push('/')} style={{ marginTop: '20px' }}>
        Return to Home
      </button>
    </div>
  );
};

export default Cancel;
