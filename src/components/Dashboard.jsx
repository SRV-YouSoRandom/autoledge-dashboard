// src/components/Dashboard.jsx
import React, { useState } from 'react';
import Header from './Header';
import DeployForm from './DeployForm';
import ConfigStack from './ConfigStack';
import EnvironmentSelector from './EnvironmentSelector';
import Summary from './Summary';
import Footer from './Footer';

const Dashboard = () => {
  const [config, setConfig] = useState({
    framework: 'Optimism Bedrock',
    settlement: 'Base Sepolia',
    dataAvailability: 'Ethereum Blobs',
    nativeToken: 'Ethereum'
  });
  
  const [environment, setEnvironment] = useState('Testnet');

  const handleConfigChange = (newConfig) => {
    setConfig(newConfig);
  };

  const handleEnvironmentChange = (newEnvironment) => {
    setEnvironment(newEnvironment);
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-tint">
      <Header />
      
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 p-4">
          <div className="bg-white rounded-lg shadow-md mb-4">
            <DeployForm />
          </div>
          <div className="bg-white rounded-lg shadow-md mb-4">
            <ConfigStack onConfigChange={handleConfigChange} />
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <EnvironmentSelector onEnvironmentChange={handleEnvironmentChange} />
          </div>
        </div>
        
        <div className="w-full md:w-96 p-4">
          <Summary config={config} environment={environment} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;