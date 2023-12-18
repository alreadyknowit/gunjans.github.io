import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pa/';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  </Router>
);

export default AppRoutes;
