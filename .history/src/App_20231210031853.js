import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';
import { Container, Row, Col } from 'reactstrap';
import 
function App() {
  return (
    <div className="App">
      <CustomNavBar />

      {/* Main Content */}
      <Container fluid>
        {/* Section 1 */}
        <Row>
          <Col>
            <img src="./images/1.jpg" alt="Image 1" className="img-fluid" />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>

        {/* Section 2 */}
        <Row>
          <Col>
            <img src="./images/2.jpg" alt="Image 2" className="img-fluid" />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>

        {/* Section 3 */}
        <Row>
          <Col>
            <img src="./images/3.jpg" alt="Image 3" className="img-fluid" />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>

        {/* Section 4 */}
        <Row>
          <Col>
            <img src="./images/4.jpg" alt="Image 4" className="img-fluid" />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
