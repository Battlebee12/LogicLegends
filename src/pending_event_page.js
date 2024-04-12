import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from './Navbar';

const PendingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState({}); 
  const [editEventId, setEditEventId] = useState(null);


  useEffect(() => {
    fetchEvents();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prevEditData => ({ ...prevEditData, [name]: value })); // Merge the new value with the current editData
  };

  const handleSubmit = async (e, eventId) => { // Add the eventId parameter
    e.preventDefault();

    try {
      const response = await Axios.put(`http://localhost:3002/updateEvent/${eventId}`, editData);

      if (response.status === 200) {
        alert('Event updated successfully.');
        fetchEvents(); // Refresh the event list
      } else {
        alert('Failed to update event. Please try again.');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert('An error occurred. Please try again.');
    }
  };

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

  return (
    <div className="bg-blue-50 min-h-screen">
        <Navbar/>

    
    <div className=" p-4 flex flex-wrap">
      <h2 className="text-2xl font-semibold mb-4 w-full">Pending Events</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {events.map((event) => (
      <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Display the event data */}
        <strong>Event ID:</strong> {event.id}<br />
        <strong>Name:</strong> {event.name}<br />
        <strong>Description:</strong> {event.description}<br />
        <strong>Location:</strong> {event.venue}<br />
    
        {/* Add an 'Edit' button that toggles the edit form */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600" onClick={() => {
        if (editEventId === event.id) {
            setEditEventId(null);
        } else {
            setEditEventId(event.id);
            setEditData(event); 
        }
        }}>Edit</button>
    
        {/* Show the edit form if this event is being edited */}
        {editEventId === event.id && (
          <form onSubmit={(e) => handleSubmit(e, event.id)}>
            <input type="text" name="name" defaultValue={event.name} onChange={handleInputChange} /><br />
            <input type="text" name="description" defaultValue={event.description} onChange={handleInputChange} /><br />
            <input type="text" name="venue" defaultValue={event.venue} onChange={handleInputChange} /><br />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">Save</button>
          </form>
        )}
      </div>
    </div>
    
    ))}
    </div>
    </div>
  );
};

export default PendingEvents;
