// src/components/Dashboard.jsx
import React, { useState } from 'react';
import DeployForm from './DeployForm';
import ConfigStack from './ConfigStack';
import EnvironmentSelector from './EnvironmentSelector';
import Summary from './Summary';

const Dashboard = () => {
  const [config, setConfig] = useState({
    framework: 'Optimism Bedrock',
    settlement: 'Base Sepolia',
    dataAvailability: 'Avail DA',
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
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
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
        
        <div className="w-full md:w-96">
          <Summary config={config} environment={environment} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;