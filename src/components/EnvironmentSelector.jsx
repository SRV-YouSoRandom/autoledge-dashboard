// src/components/EnvironmentSelector.jsx
import React, { useState, useEffect } from 'react';

const EnvironmentSelector = ({ onEnvironmentChange }) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState('Testnet');

  useEffect(() => {
    onEnvironmentChange(selectedEnvironment);
  }, [selectedEnvironment, onEnvironmentChange]);

  return (
    <div className="p-6 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Choose Deployment Type</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className={`p-4 border rounded-md cursor-pointer ${
            selectedEnvironment === 'Testnet' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
          }`}
          onClick={() => setSelectedEnvironment('Testnet')}
        >
          <div className="flex items-center mb-2">
            <input 
              type="radio" 
              checked={selectedEnvironment === 'Testnet'} 
              onChange={() => setSelectedEnvironment('Testnet')} 
              className="mr-2" 
            />
            <span className="font-medium">Testnet</span>
          </div>
          <p className="text-sm text-gray-600">Deploy a rollup on the Sepolia network. Best used as a persistent testnet and staging environment.</p>
          <p className="text-sm text-gray-600 mt-2">$99.00 / Month</p>
        </div>
        
        <div 
          className={`p-4 border rounded-md cursor-pointer ${
            selectedEnvironment === 'Mainnet' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
          }`}
          onClick={() => setSelectedEnvironment('Mainnet')}
        >
          <div className="flex items-center mb-2">
            <input 
              type="radio" 
              checked={selectedEnvironment === 'Mainnet'} 
              onChange={() => setSelectedEnvironment('Mainnet')} 
              className="mr-2" 
            />
            <span className="font-medium">Mainnet</span>
          </div>
          <p className="text-sm text-gray-600">Deploy a live network with genuine transactions and real economic value.</p>
          <p className="text-sm text-gray-600 mt-2">$3,000 / month</p>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentSelector;