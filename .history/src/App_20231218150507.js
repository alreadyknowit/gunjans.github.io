import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';

import './styles/anasayfa.css'
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Main/>
    </div>
  );
}

export default App;