import React from "react";
import { Row, Col } from 'reactstrap';
import './SummaryComponentStyle.css';

const SummaryComponent = (props) => {
  return (
    <div className="summary-container">
      <Row>
        {props.isLeft ? (
          <>
            <Col xs="9">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </Col>
            <Col xs="3" className="d-flex align-items-center justify-content-center">
              <img src={props.image} alt={props.alt} className="img-fluid" />
            </Col>
          </>
        ) : (
          <>
            <Col xs="3" className="d-flex align-items-center justify-content-center">
              <img src={props.image} alt={props.alt} className="img-fluid" />
            </Col>
            <Col xs="9">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default SummaryComponent;
