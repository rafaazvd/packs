import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import Home from '../pages/Home';
import Login from '../pages/Login';

const RoutesComponent: React.FC = () => {
  const { signed } = useAuth();
  return (
    <>
      {
            signed && (
              <Routes>
                <Route path="/dashboard" element={<Home/>} />
                <Route path="/" element={<Home/>} />
              </Routes>
            )
        }
      {
            !signed && (
              <Routes>
                <Route path="/" element={<Login/>} />
              </Routes>
            )
        }
    </>
  );
};

export default RoutesComponent;
