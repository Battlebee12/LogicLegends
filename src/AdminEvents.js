import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    Axios.get('http://localhost:3002/events?all=true')

      .then((response) => {
        const filteredEvents = response.data.filter(event => event.status === 'pending');
        setEvents(filteredEvents);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const handleApprove = (eventId) => {
    Axios.put(`http://localhost:3002/admin/events/${eventId}`, {
      status: 'approved'
    }, {
      headers: {
        Authorization: 'Bearer YOUR_ADMIN_TOKEN_HERE' // Ensure you replace this with the actual token
      }
    })
      .then((response) => {
        console.log(`Event with ID ${eventId} approved.`);
        fetchEvents(); // Refresh the event list
      })
      .catch((error) => {
        console.error('Error approving event:', error);
      });
  };
  
  const handleReject = (eventId) => {
    Axios.put(`http://localhost:3002/admin/events/${eventId}`, {
      status: 'rejected'
    }, {
      headers: {
        Authorization: 'Bearer YOUR_ADMIN_TOKEN_HERE' // Same here for the token
      }
    })
      .then((response) => {
        console.log(`Event with ID ${eventId} rejected.`);
        fetchEvents(); // Refresh the event list
      })
      .catch((error) => {
        console.error('Error rejecting event:', error);
      });
  };
  return (
    <div className="p-4 flex flex-wrap">
      <h2 className="text-2xl font-semibold mb-4 w-full">Manage Events</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {events.map((event) => (
        <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <strong>Event ID:</strong> {event.id}<br />
            <strong>Name:</strong> {event.name}<br />
            <strong>Description:</strong> {event.description}<br />
            <strong>Location:</strong> {event.venue}<br />
            
            <div className="flex justify-between mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600" onClick={() => handleApprove(event.id)}>Approve</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600" onClick={() => handleReject(event.id)}>Reject</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminEvents;

