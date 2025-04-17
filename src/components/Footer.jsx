// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-blue-tint-darker">
      <div className="flex space-x-4">
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">Want a demo</button>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-900">Docs</button>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-900">Blog</button>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-900">Jobs</button>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-900">Contact support</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Need Assistance?
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
          Request A Call
        </button>
      </div>
    </div>
  );
};

export default Footer;