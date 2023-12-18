import React from "react"
import { Row, Col } from 'reactstrap'
const SummaryComponent = (props) => {

    return (
        {
            {props.isLeft ? <div className="summary-container">
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Col>
                    <Col>
                        <img src={props.image} alt={props.alt} className="img-fluid" />
                    </Col>

                </Row>

            </div> : <div className="summary-container">
                <Row>
                    <Col>
                        <img src={props.image} alt={props.alt} className="img-fluid" />
                    </Col>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Col>
                </Row>

            </div>
        }


    )
}


export default SummaryComponent;