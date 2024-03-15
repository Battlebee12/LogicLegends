import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3002/events/${id}`);
        if (response.ok) {
          const eventData = await response.json();
          setEventDetails(eventData);
        } else {
          console.error('Error fetching event details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };
    fetchEventDetails();
  }, [id]);

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">{eventDetails.title}</h2>
        <p className="text-lg mb-6">{eventDetails.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="mb-2"><strong>Date:</strong> {eventDetails.date}</p>
            <p className="mb-2"><strong>Location:</strong> {eventDetails.location}</p>
            <p className="mb-2"><strong>Organizer:</strong> {eventDetails.organizer}</p>
            <p className="mb-2"><strong>Price per ticket:</strong> ${eventDetails.price}</p>
          </div>
          <div className="text-right">
            {/* Quantity selection and Buy Now button */}
          </div>
        </div>
        {/* Total price and Buy Now button */}
      </div>
    </div>
  );
};

export default EventDetails;
