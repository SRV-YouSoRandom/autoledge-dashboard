// src/pages/NaaSPage.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/naas/Sidebar';
import NodeDeployment from '../components/naas/NodeDeployment';
import Footer from '../components/Footer';

const NodeConsole = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold text-gray-800">Node Console</h1>
    <p className="text-gray-600 mt-2">Node management console will be implemented in future updates.</p>
  </div>
);

const NaaSPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-tint">
      <div className="flex-1 container mx-auto px-4 flex flex-col md:flex-row gap-4 py-6">
        <div className="md:w-64 flex-shrink-0">
          <Sidebar />
        </div>
        
        <div className="flex-1 bg-white rounded-lg shadow-md">
          <Routes>
            <Route path="/console" element={<NodeConsole />} />
            <Route path="/deployment" element={<NodeDeployment />} />
            <Route path="/" element={<Navigate to="/naas/deployment" replace />} />
          </Routes>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NaaSPage;