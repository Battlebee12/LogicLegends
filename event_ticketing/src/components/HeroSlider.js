import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import concert1 from '../Images/concert.jpg';
import concert2 from '../Images/concert2.jpg';
import concert3 from '../Images/concert3.jpeg';

const SliderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Slide = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: auto; /* Center the image horizontally */
`;

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000, // Change slides every 10 seconds
    touchThreshold: 100,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <Slide>
          <SlideImage src={concert1} alt="Concert 1" />
        </Slide>
        <Slide>
          <SlideImage src={concert2} alt="Concert 2" />
        </Slide>
        <Slide>
          <SlideImage src={concert3} alt="Concert 3" />
        </Slide>
      </Slider>
    </SliderWrapper>
  );
};

export default HeroSlider;
