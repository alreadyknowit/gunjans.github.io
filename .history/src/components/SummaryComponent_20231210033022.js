import React from "react"
import { Row, Col } from 'reactstrap'
const SummaryComponent = (props) => {

    return (
        <div className="summary-container">
            <Row>
              {props.isLeft}

            </Row>

        </div>

    )
}


export default SummaryComponent;