import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFound from './pages/NotFound'

const AppRoutes = () => (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

    </Routes>

);

export default AppRoutes;
