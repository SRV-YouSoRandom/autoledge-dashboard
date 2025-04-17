import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="flex items-center space-x-6 mb-4">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `text-lg font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`
        }
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
  );
};

export default Navigation;