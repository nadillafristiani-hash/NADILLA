import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import DetailKamar from './page/DetailKamar';
import Penghuni from './page/Penghuni';
import Pembayaran from './page/Pembayaran';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detail-kamar" element={<DetailKamar />} />
        <Route path="/penghuni" element={<Penghuni />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
      </Routes>
    </Router>
  );
}

export default App;