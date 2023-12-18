import React from "react"
import { Row, Col } from 'reactstrap'
import 'SummaryComponentStyle'
const SummaryComponent = (props) => {

    return (

        props.isLeft ? (<div className="summary-container h-100">
            <Row className="h-100">
                <Col className="d-flex align-items-center h-100">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Col>
                <Col>
                    <img src={props.image} alt={props.alt} className="img-fluid h-100" />
                </Col>

            </Row>

        </div>)
            :
            (<div className="summary-container h-25">
                <Row className="h-100">
                    <Col >
                        <img src={props.image} alt={props.alt} className="img-fluid h-100" />
                    </Col>
                    <Col className="d-flex align-items-center h-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Col>
                </Row>

            </div>)
    )
}


export default SummaryComponent;