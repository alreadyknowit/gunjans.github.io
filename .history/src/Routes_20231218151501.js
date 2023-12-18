import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Main';
import AboutPage from './pages/About';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </Router>
);

export default AppRoutes;
