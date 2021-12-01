import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';


const RoutesComponent: React.FC = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default RoutesComponent;
