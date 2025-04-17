// src/components/DeployForm.jsx
import React, { useState } from 'react';

const DeployForm = () => {
  const [formData, setFormData] = useState({
    organization: 'managing-tan-aardvark',
    rollupName: 'fiscal-bronze-possum',
    chainId: '7185'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Deploy a rollup</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
          <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white">
            <div className="bg-blue-500 text-white rounded w-6 h-6 flex items-center justify-center mr-2">M</div>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            Rollup name
            <span className="ml-1 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white">
            <input
              type="text"
              name="rollupName"
              value={formData.rollupName}
              onChange={handleChange}
              className="flex-1 outline-none bg-transparent"
            />
            <button className="ml-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Slugified as fiscal-bronze-possum with an appended string</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            Chain ID
            <span className="ml-1 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </label>
          <input
            type="text"
            name="chainId"
            value={formData.chainId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default DeployForm;