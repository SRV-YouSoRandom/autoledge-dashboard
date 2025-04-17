// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RaaSPage from './pages/RaaSPage';
import NaaSPage from './pages/NaaSPage';
import Navigation from './components/shared/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-blue-tint">
        <Navigation />
        <div className="flex-1">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/raas" element={<RaaSPage />} />
            <Route path="/naas/*" element={<NaaSPage />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;