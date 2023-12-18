import React from "react"
const SummaryComponent = (props) => {


    return (
        <Row>
            <Col>
                <p>
                </p>
            </Col>
            <Col>
                <img src={props.image} alt={props.alt} className="img-fluid" />
            </Col>

        </Row>
    )
}