import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data from the backend
    Axios.get('http://localhost:3002/events')
      .then((response) => {
        console.log('Events:', response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleApprove = (eventId) => {
    // Implement approval logic here
    console.log(`Approving event with ID ${eventId}`);
  };

  const handleReject = (eventId) => {
    // Implement rejection logic here
    console.log(`Rejecting event with ID ${eventId}`);
  };

  const handleReadMore = (eventId) => {
    // Implement read more logic here
    console.log(`Read more for event with ID ${eventId}`);
  };

  return (
    <div className="p-4 flex flex-wrap">
      <h2 className="text-2xl font-semibold mb-4 w-full">Manage Events</h2>
      {events.map((event) => (
        <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <strong>Event ID:</strong> {event.id}<br />
            <strong>Name:</strong> {event.name}<br />
            <strong>Description:</strong> {event.description}<br />
            <strong>Location:</strong> {event.venue}<br />
            <strong>Age Restriction:</strong> {event.ageRestriction}<br />
            <strong>Capacity:</strong> {event.ticker_available}<br />
            <strong>Status:</strong> {event.status}
            {event.status === 'pending' && (
              <div className="flex justify-between mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600" onClick={() => handleApprove(event.id)}>Approve</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600" onClick={() => handleReject(event.id)}>Reject</button>
              </div>
            )}
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminEvents;
