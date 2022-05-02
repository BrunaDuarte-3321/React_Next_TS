import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Dashbord } from '../pages/Dashbord';
import { Repo } from '../pages/Repo';
export const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashbord />} />
      <Route path="/repo" element={<Repo />} />
    </Routes>
  );
};
