// /components/Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;



