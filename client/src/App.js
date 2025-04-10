import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // your Dashboard page
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} /> {/* 👈 Home page first */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;


