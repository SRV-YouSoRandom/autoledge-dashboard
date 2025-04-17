// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-tint">
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Deploy Your Rollup or Node from One Place
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            AutoLedge does it all for you. Simplify your blockchain infrastructure deployment with our all-in-one platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h2 className="text-2xl font-bold mb-4">Rollup as a Service</h2>
              <p className="text-gray-600 mb-6">
                Deploy your own custom rollup in minutes. Secure, scalable, and fully customizable.
              </p>
              <Link 
                to="/raas" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Deploy a Rollup
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📡</div>
              <h2 className="text-2xl font-bold mb-4">Node as a Service</h2>
              <p className="text-gray-600 mb-6">
                Launch blockchain nodes with ease. Multiple networks supported with premium features.
              </p>
              <Link 
                to="/naas" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Deploy a Node
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;