import React from 'react';
import { Container, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';
import SummaryComponent from './components/SummaryComponent';
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import CustomSlider from './components/CustomSlider';
import './styles/anasayfa.css'
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Main>
    </div>
  );
}

export default App;