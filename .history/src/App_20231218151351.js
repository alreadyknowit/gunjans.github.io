import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';


function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <AppRoutes />
    </div>
  );
}

export default App;