// /pages/payments/invoice/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchInvoiceDetail = async () => {
        try {
          const response = await axios.get(`/api/invoiceDetail`, {
            params: { invoiceId: id },
          });
          setInvoice(response.data);
        } catch (err) {
          setError('Failed to fetch invoice details');
        }
      };

      fetchInvoiceDetail();
    }
  }, [id]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Invoice Detail</h1>
      {invoice ? (
        <div>
          <p>Invoice ID: {invoice.id}</p>
          <p>Amount: {invoice.amount_due}</p>
          <p>Status: {invoice.status}</p>
          {/* Add more fields as necessary */}
        </div>
      ) : (
        <p>Loading invoice details...</p>
      )}
    </div>
  );
};

export default InvoiceDetail;
