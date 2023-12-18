import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';

import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <AppRoutes />
    </div>
  );
}

export default App;