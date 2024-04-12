import React from 'react';
import educational from "../Images/educational.jpg";
import music from "../Images/music_concert.jpg";
import sport from "../Images/sports.jpg";
import culture from "../Images/holi.jpg";
import { Link } from 'react-router-dom';

const EventCat = () => {
  const events = [
    { category: 'Music', image: music },
    { category: 'Educational', image: educational },
    { category: 'Sports', image: sport },
    { category: 'Cultural', image: culture },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {events.map((event, index) => (
        
          <div className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <img src={event.image} alt={event.category} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-xl">{event.category}</span>
            </div>
          </div>
        
      ))}
    </div>
  );
};

export default EventCat;

