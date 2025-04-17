import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import Navigation from '../components/shared/Navigation';

const RaaSPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-tint">
      <Header />
      
      <div className="container mx-auto px-4 mt-4">
        <Navigation />
      </div>
      
      <div className="flex-1">
        <Dashboard />
      </div>
      
      <Footer />
    </div>
  );
};

export default RaaSPage;