// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-800">AutoLedge</h1>
      </div>
      <div className="flex items-center">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm flex items-center">
          <span className="mr-2">John Doe</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
