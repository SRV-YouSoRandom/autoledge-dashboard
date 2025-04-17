// src/components/ConfigStack.jsx
import React, { useState, useEffect } from 'react';

const ConfigStack = ({ onConfigChange }) => {
  const [selectedFramework, setSelectedFramework] = useState('Optimism Bedrock');
  const [selectedSettlement, setSelectedSettlement] = useState('Base Sepolia');
  const [selectedDA, setSelectedDA] = useState('Ethereum Blobs');
  const [selectedToken, setSelectedToken] = useState('Ethereum');

  useEffect(() => {
    // Update parent component with current selections
    onConfigChange({
      framework: selectedFramework,
      settlement: selectedSettlement,
      dataAvailability: selectedDA,
      nativeToken: selectedToken
    });
  }, [selectedFramework, selectedSettlement, selectedDA, selectedToken, onConfigChange]);

  return (
    <div className="p-6 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Configure your stack</h2>
      
      {/* Framework */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Framework</span>
          <span className="ml-1 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            className={`p-2 border rounded-md flex items-center ${
              selectedFramework === 'Optimism Bedrock' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setSelectedFramework('Optimism Bedrock')}
          >
            <div className="w-6 h-6 rounded-full bg-red-500 mr-2 flex items-center justify-center text-white text-xs">
              O
            </div>
            <span>Optimism Bedrock</span>
          </button>
          <button
            className="p-2 border border-gray-300 rounded-md flex items-center opacity-50 cursor-not-allowed bg-white"
            disabled
          >
            <div className="w-6 h-6 rounded-full bg-blue-500 mr-2 flex items-center justify-center text-white text-xs">
              A
            </div>
            <span>Arbitrum Orbit</span>
          </button>
        </div>
      </div>
      
      {/* Settlement Layer */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Settlement layer</span>
          <span className="ml-1 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            className={`p-2 border rounded-md flex items-center ${
              selectedSettlement === 'Ethereum L1' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setSelectedSettlement('Ethereum L1')}
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 mr-2 flex items-center justify-center text-white text-xs">
              E
            </div>
            <span>Ethereum L1</span>
          </button>
          <button
            className={`p-2 border rounded-md flex items-center ${
              selectedSettlement === 'Base Sepolia' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setSelectedSettlement('Base Sepolia')}
          >
            <div className="w-6 h-6 rounded-full bg-blue-400 mr-2 flex items-center justify-center text-white text-xs">
              B
            </div>
            <span>Base Sepolia</span>
          </button>
        </div>
      </div>
      
      {/* Data Availability */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Data availability</span>
          <span className="ml-1 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className={`p-2 border rounded-md flex items-center ${
              selectedDA === 'Ethereum DA' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setSelectedDA('Ethereum DA')}
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 mr-2 flex items-center justify-center text-white text-xs">
              E
            </div>
            <span>Ethereum DA</span>
          </button>
          <button
            className={`p-2 border rounded-md flex items-center ${
              selectedDA === 'Celestia DA' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setSelectedDA('Celestia DA')}
          >
            <div className="w-6 h-6 rounded-full bg-purple-500 mr-2 flex items-center justify-center text-white text-xs">
              C
            </div>
            <span>Celestia DA</span>
          </button>
          <button
            className={`p-2 border rounded-md flex items-center ${
              selectedDA === 'Avail DA' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setSelectedDA('Avail DA')}
          >
            <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex items-center justify-center text-white text-xs">
              A
            </div>
            <span>Avail DA</span>
          </button>
        </div>
      </div>

      {/* Native Token */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Native Token</span>
          <span className="ml-1 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className={`p-2 border rounded-md flex items-center ${
              selectedToken === 'Ethereum' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setSelectedToken('Ethereum')}
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 mr-2 flex items-center justify-center text-white text-xs">
              E
            </div>
            <span>Ethereum</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigStack;