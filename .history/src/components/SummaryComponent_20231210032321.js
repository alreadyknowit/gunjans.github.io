import React from "react"
const SummaryComponent = (props) => {


    return (
        <Row>
            <Col>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Col>
            <Col>
                <img src={props.image} alt={props.alt} className="img-fluid" />
            </Col>

        </Row>
    )
}

ex