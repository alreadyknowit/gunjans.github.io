import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';
import SummaryComponent from './components/SummaryComponent';
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import CustomSlider from './components/CustomSlider';

function App() {
 const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
 };

 return (
    <div className="App">
      <CustomNavBar />
      <CustomSlider></CustomSlider>
     
    </div>
 );
}

export default App;