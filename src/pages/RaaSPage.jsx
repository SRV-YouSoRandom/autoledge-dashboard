// src/pages/RaaSPage.jsx
import React from 'react';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

const RaaSPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-tint">
      <div className="flex-1">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
};

export default RaaSPage;