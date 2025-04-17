import React, { useState, useEffect } from 'react';
import NodeItem from './NodeItem';
import nodesData from '../../data/nodes.json';

const NodeDeployment = () => {
  const [nodes, setNodes] = useState([]);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    // In a real app, this could be an API call
    setNodes(nodesData);
  }, []);
  
  const filteredNodes = filter === 'all' 
    ? nodes 
    : filter === 'live' 
      ? nodes.filter(node => !node.status || node.status !== 'coming_soon') 
      : nodes.filter(node => node.status === 'coming_soon');
  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Node Deployment</h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-8 border border-gray-300 rounded-md"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-2 top-2.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      
      <div className="mb-6 flex items-center space-x-2">
        <button
          className={`px-4 py-1 rounded-full text-sm ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm ${
            filter === 'live' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setFilter('live')}
        >
          Live
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm ${
            filter === 'coming_soon' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setFilter('coming_soon')}
        >
          Coming Soon
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredNodes.map(node => (
          <NodeItem key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
};

export default NodeDeployment;