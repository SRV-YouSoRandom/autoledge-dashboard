// src/components/shared/Navigation.jsx
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when location changes
  React.useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800">AutoLedge</h1>
          </div>
          
          {/* Centered navigation links */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <NavLink 
                to="/home" 
                className={({ isActive }) => 
                  `text-lg font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`
                }
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/raas" 
                className={({ isActive }) => 
                  `text-lg font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`
                }
                end
              >
                RaaS
              </NavLink>
              <NavLink 
                to="/naas" 
                className={({ isActive }) => 
                  `text-lg font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`
                }
              >
                NaaS
              </NavLink>
            </div>
          </div>
          
          <div className="flex items-center relative flex-1 justify-end">
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
      </div>
    </div>
  );
};

export default Navigation;