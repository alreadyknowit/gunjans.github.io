import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';

import AppRoutes from './'
function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <AppRoutes />
    </div>
  );
}

export default App;