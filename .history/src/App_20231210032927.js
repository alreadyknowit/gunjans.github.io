import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';
import { Container, Row, Col } from 'reactstrap';
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'

import SummaryComponent from './components/SummaryComponent';
function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Container fluid>
        <SummaryComponent alt="Image 1" image={image1} left ></SummaryComponent>
        <SummaryComponent alt="Image 2" image={image2} ></SummaryComponent>
        <SummaryComponent alt="Image 3" image={image3} ></SummaryComponent>
        <SummaryComponent alt="Image 4" image={image4} ></SummaryComponent>
      </Container>
    </div>
  );
}

export default App;
