import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomSlider.css'; // Add your custom styling for the slider

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
        <img src={image1} alt="Image 1" />
      </div>
      <div>
        {/* Your content for the second slide */}
        <img src={image2} alt="Image 2" />
      </div>
      <div>
        {/* Your content for the third slide */}
        <img src={image3} alt="Image 3" />
      </div>
      <div>
        {/* Your content for the fourth slide */}
        <img src={image4} alt="Image 4" />
      </div>
    </Slider>
  );
};

export default CustomSlider;
