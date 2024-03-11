import React from 'react';
import styled from 'styled-components';
import concert from '../Images/concert.jpg'
import { Link } from 'react-router-dom';


const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${concert}) center/cover no-repeat;
  color: #fff;
  text-align: center;
  padding: 100px ; /* Adjust padding based on your design */
`;


const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
      <h1 className=" p-5 text-3xl font-extrabold tracking-wide text-gray-100 sm:text-5xl md:text-5xl font-montserrat">
        <span className="block">Discover the Magic of Event Ticketing</span>
      </h1>


      <p className="text-lg mt-4 mb-6 text-gray-300 font-semibold">
        <span className="block text-xl">Immerse yourself in the thrill of live experiences.</span>
        
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
}

 export default Hero;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(${concert})' }}>
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"></div>
//       <div className="flex items-center justify-center text-white h-full">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Your Event Ticketing Platform</h1>
//           <p className="text-lg mb-6">Discover and attend exciting events near you.</p>
//           <Link to="/browse-events" className="bg-white text-black px-6 py-3 font-bold rounded-full hover:bg-gray-300 transition duration-300">
//             Browse Events
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: 'url("components/concert.jpg")' }}
//       ></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"></div>
//       <div className="flex items-center justify-center text-white h-full">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Your Event Ticketing Platform</h1>
//           <p className="text-lg mb-6">Discover and attend exciting events near you.</p>
//           <Link
//             to="/browse-events"
//             className="bg-white text-black px-6 py-3 font-bold rounded-full hover:bg-gray-300 transition duration-300"
//           >
//             Browse Events
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;