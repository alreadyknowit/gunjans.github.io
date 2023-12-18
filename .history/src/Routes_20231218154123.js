import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import HomePage from './pages/Main';
import AboutPage from './pages/About';
import NotFound from './pages/NotFound'

const AppRoutes = () => (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="*" element={<NotFound/>}/>

    </Routes>

);

export default AppRoutes;
