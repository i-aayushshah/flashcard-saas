// /components/payments/Invoicing.js
import React, { useEffect, useState } from 'react';
import { fetchUserInvoices } from '../../utils/stripe';

const Invoicing = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const loadInvoices = async () => {
      const userInvoices = await fetchUserInvoices();
      setInvoices(userInvoices);
    };

    loadInvoices();
  }, []);

  return (
    <div className="invoicing">
      <h1>Your Invoices</h1>
      {invoices.length === 0 ? (
        <p>You don't have any invoices.</p>
      ) : (
        <ul>
          {invoices.map((invoice) => (
            <li key={invoice.id}>
              {invoice.amount_due / 100} {invoice.currency.toUpperCase()} - {new Date(invoice.created * 1000).toLocaleDateString()}
              <a href={invoice.invoice_pdf} target="_blank" rel="noopener noreferrer">Download PDF</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Invoicing;
