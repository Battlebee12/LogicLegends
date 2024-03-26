import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroSlider from './HeroSlider';

const HeroSection = styled.section`
  position: relative;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroSlider />
      <HeroContent>
        <h1 className=" p-5 text-3xl font-extrabold tracking-wide text-gray-100 sm:text-5xl md:text-5xl font-montserrat">
          <span className="block">Welcome to Eventify</span>
        </h1>
        <p className="text-lg mt-4 mb-6 text-gray-300 font-semibold">
          <span className="block text-xl"></span>
        </p>
        <Link
          to="/browse-events"
          className="inline-block bg-tropical-blue-500 hover:bg-tropical-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Browse Events
        </Link>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
