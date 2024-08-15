// /components/payments/InvoiceDetail.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchInvoiceDetail } from '../../utils/stripe';

const InvoiceDetail = () => {
  const [invoice, setInvoice] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const loadInvoiceDetail = async () => {
        const invoiceDetail = await fetchInvoiceDetail(id);
        setInvoice(invoiceDetail);
      };

      loadInvoiceDetail();
    }
  }, [id]);

  return (
    <div className="invoice-detail">
      <h1>Invoice Details</h1>
      {invoice.id ? (
        <div>
          <p>Invoice ID: {invoice.id}</p>
          <p>Amount: {invoice.amount_due / 100} {invoice.currency.toUpperCase()}</p>
          <p>Status: {invoice.status}</p>
          <p>Date: {new Date(invoice.created * 1000).toLocaleDateString()}</p>
          <a href={invoice.invoice_pdf} target="_blank" rel="noopener noreferrer">Download PDF</a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InvoiceDetail;
