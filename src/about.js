import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-10 mx-auto max-w-xl mt-10">
        <h2 className="mb-5 text-3xl font-bold text-blue-800">About Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          Eventify is a comprehensive event management platform designed to simplify the process of organizing and managing events of all types and sizes. Whether you're hosting a small gathering or a large-scale conference, Eventify provides the tools and features you need to plan, promote, and execute successful events.
        </p>
        <h3 className="mb-5 text-2xl font-bold text-blue-800">Our Team</h3>
        <ul className="list-none space-y-8">
          {['Raghav', 'Sarab', 'Lluis', 'Shreya'].map((name, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img className="w-16 h-16 rounded-full" src={`https://randomuser.me/api/portraits/men/${index}.jpg`} alt={name} />
              <div>
                <h3 className="text-2xl font-semibold text-blue-800">{name}</h3>
                <p className="text-lg text-gray-700">{index === 0 ? 'CEO' : index === 1 ? 'CTO' : 'Lead Developer'}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
