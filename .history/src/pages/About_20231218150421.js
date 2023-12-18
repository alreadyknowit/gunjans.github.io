
import React from 'react'

export default function About() {
    return (
        <div>
            <CustomSlider></CustomSlider>
            <Container fluid>
                <SummaryComponent alt="Image 1" image={image1} isLeft={false}></SummaryComponent>
                <SummaryComponent alt="Image 2" image={image2} isLeft={true}></SummaryComponent>
                <SummaryComponent alt="Image 3" image={image3} isLeft={false}></SummaryComponent>
                <SummaryComponent alt="Image 4" image={image4} isLeft={true}></SummaryComponent>
            </Container>

        </div>
    )
}
