// /pages/payments/success.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page or another relevant page after a short delay
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. You will be redirected shortly.</p>
    </div>
  );
};

export default Success;
