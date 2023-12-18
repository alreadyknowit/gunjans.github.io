import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import HomePage from './pages/Main';
import AboutPage from './pages/About';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage>} />
      <Route path="/about" element={AboutPage} />
      <Route path="*" element={<NotFound/>}/>

    </Routes>
  </Router>
);

export default AppRoutes;
