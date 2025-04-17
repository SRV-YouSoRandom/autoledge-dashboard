import React from 'react';

const NodeItem = ({ node }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          {/* Network label */}
          <div className="text-sm text-gray-500">{node.network}</div>
          
          {/* New badge */}
          {node.status === 'new' && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
          )}
        </div>
        
        {/* Node icon and name */}
        <div className="flex items-center mb-2">
          <div className="text-2xl mr-2">{node.icon}</div>
          <div className="font-bold">
            {node.name}
            {node.premium && (
              <div className="text-xs text-amber-600">Premium</div>
            )}
          </div>
        </div>
        
        {/* Node type */}
        <div className="bg-gray-100 text-gray-700 text-xs inline-block px-2 py-1 rounded mb-3">
          {node.type}
        </div>
        
        {/* Read more link */}
        <div className="text-sm text-gray-600 flex items-center cursor-pointer hover:text-blue-600">
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Live
        </div>
      </div>
    </div>
  );
};

export default NodeItem;