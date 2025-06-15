// src/components/CompanySummary.jsx
import React from 'react';

const CompanySummary = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Company Setup Summary</h2>
      
      <div className="border-b border-gray-200 pb-4 mb-4"></div>

      <div className="bg-blue-100 p-4 rounded-md flex items-start mb-4">
        <div className="bg-blue-600 text-white rounded p-1 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-blue-800">Company Creation</h3>
          <p className="text-sm text-gray-700">Set up your blockchain-enabled company with integrated accounting and token management.</p>
        </div>
      </div>
      
      <div className="mb-6 p-4 bg-gray-50 rounded-md">
        <h3 className="text-lg font-semibold mb-3">Setup Features</h3>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-sm">Integrated token management</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-sm">Blockchain wallet integration</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-sm">Automated financial year setup</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-sm">Multi-currency support</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-sm">Compliance-ready structure</span>
          </div>
        </div>
      </div>
      
      <div className="summary-item">
        <button className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <span className="font-bold mr-2">Company Profile</span>
            <span className="text-gray-500 text-sm">Basic Information</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-1">
          Company name, ID, and token information for blockchain integration.
        </p>
      </div>
      
      <div className="summary-item">
        <button className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <span className="font-bold mr-2">Address Details</span>
            <span className="text-gray-500 text-sm">Location Info</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-1">
          Complete address information including state, country, and postal details.
        </p>
      </div>
      
      <div className="summary-item">
        <button className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <span className="font-bold mr-2">Contact Information</span>
            <span className="text-gray-500 text-sm">Communication</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-1">
          Phone, email, and website details for business communication.
        </p>
      </div>
      
      <div className="summary-item">
        <button className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <span className="font-bold mr-2">Financial Setup</span>
            <span className="text-gray-500 text-sm">Accounting Period</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-1">
          Financial year and books beginning dates for accounting compliance.
        </p>
      </div>
      
      <div className="bg-blue-tint-darker p-4 mt-6 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Setup Cost</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Setup Time</span>
          <span className="font-medium">~2 minutes</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Token Integration</span>
          <span className="font-medium">Included</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium rounded-md mt-4 transition-colors">
        Create Company
      </button>
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <p className="text-sm text-yellow-800 font-medium">Important Note</p>
            <p className="text-xs text-yellow-700 mt-1">
              Ensure all company information is accurate as it will be used for blockchain transactions and compliance reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySummary;