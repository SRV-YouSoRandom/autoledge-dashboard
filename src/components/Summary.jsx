// src/components/Summary.jsx
import React from 'react';

const Summary = ({ config, environment }) => {
  const getEnvironmentCost = () => {
    return environment === 'Testnet' ? '$99.00/Month' : '$3,000/Month';
  };

  const getEnvironmentDescription = () => {
    return environment === 'Testnet' 
      ? 'A development environment running settling on public testnets to safely build before deploying to production.'
      : 'A production environment with real economic value.';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Summary</h2>
      
      <div className="border-b border-gray-200 pb-4 mb-4"></div>

      <div className="bg-blue-100 p-4 rounded-md flex items-start mb-4">
        <div className="bg-blue-600 text-white rounded p-1 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-blue-800">{environment}</h3>
          <p className="text-sm text-gray-700">{getEnvironmentDescription()}</p>
        </div>
        <div className="ml-auto font-bold text-blue-800">
          {getEnvironmentCost()}
        </div>
      </div>
      
      {environment === 'Mainnet' && (
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-semibold mb-3">Costs and pricing</h3>
          
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className="text-sm">Deployment cost</span>
              <span className="ml-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <span className="text-sm">≈ 0.2430 ETH</span>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className="text-sm">Monthly recurring DA cost</span>
              <span className="ml-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <span className="text-sm">≈ 0.1561 ETH</span>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className="text-sm">Sequencer profit share</span>
              <span className="ml-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <span className="text-sm">5%</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm">Plan cost</span>
            <span className="text-sm text-green-600">$3,000 / month</span>
          </div>
        </div>
      )}
      
      <div className="summary-item">
        <button className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <span className="font-bold mr-2">{config.framework}</span>
            <span className="text-gray-500 text-sm">Rollup Stack</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-1">
          An optimistic rollup architecture focused on simplicity, modularity, and the ability to join the Superchain ecosystem.
        </p>
      </div>
      
      <div className="summary-item">
        <button className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <span className="font-bold mr-2">{config.settlement}</span>
            <span className="text-gray-500 text-sm">Settlement Layer</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-1">
          A testnet version of Coinbase's Base L2 network for testing applications before mainnet deployment.
        </p>
      </div>
      
      <div className="summary-item">
        <button className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <span className="font-bold mr-2">{config.dataAvailability}</span>
            <span className="text-gray-500 text-sm">Data Availability</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-1">
          Uses Ethereum blob storage for data availability, providing strong security for rollups.
        </p>
      </div>
      
      <div className="summary-item">
        <button className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <span className="font-bold mr-2">{config.nativeToken}</span>
            <span className="text-gray-500 text-sm">Native Token</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-1">
          The native token that will be used for gas fees and network operations.
        </p>
      </div>
      
      <div className="bg-blue-tint-darker p-4 mt-6 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Deployment Cost</span>
          <span className="font-medium">Included</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Time to Deploy</span>
          <span className="font-medium">~5 minutes</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium rounded-md mt-4 transition-colors">
        Deploy Your Rollup
      </button>
    </div>
  );
};

export default Summary;