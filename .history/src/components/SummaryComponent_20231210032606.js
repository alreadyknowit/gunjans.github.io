import React from "react"
import { Row, Col } from 'reactstrap'
const SummaryComponent = (props) => {

    console.log(props.image)
    return (
        <div>
            <Row>
                <Col>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Col>
                <Col>
                    <img src={props.image} alt={props.alt} className="img-fluid" />
                </Col>

            </Row>

        </div>

    )
}

export default SummaryComponent;