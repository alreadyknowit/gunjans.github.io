import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/slider1.jpg'
import image2 from '../images/slider2.jpg'
import image3 from '../images/slider3.jpg'
import image4 from '../images/slider4.jpg'
import './CustomSliderStyle.css'; // Add your custom styling for the slider

const CustomSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img src={image1} alt="Image 1" className="img-fluid"/>
      </div>
      <div>
        <img src={image2} alt="Image 2" lassName="img-fluid"/>
      </div>
      <div>
        <img src={image3} alt="Image 3" />
      </div>
      <div>
        <img src={image4} alt="Image 4" />
      </div>
    </Slider>
  );
};

export default CustomSlider;
