// src/components/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-800">AutoLedge</h1>
      </div>
      <div className="flex items-center relative">
        <button 
          className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm flex items-center"
          onClick={toggleDropdown}
        >
          <span className="mr-2">John Doe</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;