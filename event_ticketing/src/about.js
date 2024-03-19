import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">About Eventify</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Welcome to Eventify, your go-to platform for discovering and booking exciting events! At Eventify, we're passionate about connecting people with unforgettable experiences, whether it's concerts, sports games, festivals, or workshops.
        </p>
        <h3 className="text-xl font-bold mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our mission at Eventify is simple: to make event discovery and ticket purchasing easy, convenient, and enjoyable for everyone. We strive to provide a seamless and hassle-free experience for both event organizers and attendees, ensuring that every event is a success.
        </p>
        <h3 className="text-xl font-bold mb-4">What We Offer</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-8">
          <li>Wide Selection: We curate a wide variety of events to cater to every interest and preference, ensuring that there's something for everyone on Eventify.</li>
          <li>Easy Booking: Our user-friendly interface makes it easy to browse, select, and book tickets for your favorite events in just a few clicks.</li>
          <li>Secure Transactions: Rest assured that your transactions on Eventify are secure and protected, providing you with peace of mind when purchasing tickets.</li>
          <li>Exceptional Support: Our dedicated support team is always ready to assist you with any questions or concerns you may have, ensuring a smooth and enjoyable experience.</li>
        </ul>
        <h3 className="text-xl font-bold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Raghav</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarab</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lluis</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Shreya</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
