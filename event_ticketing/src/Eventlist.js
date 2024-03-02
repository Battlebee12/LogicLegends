// EventList.js
import React, { useState } from 'react';

function EventList() {
  const [events] = useState([
    {
      id: 1,
      title: 'Demo Event 1',
      description: 'This is the description of demo event 1.',
      date: '2024-03-15',
      location: 'Location 1'
    },
    {
      id: 2,
      title: 'Demo Event 2',
      description: 'This is the description of demo event 2.',
      date: '2024-03-20',
      location: 'Location 2'
    },
    // Add more demo events as needed
  ]);

  return (
    <div>
      <h2>Events List</h2>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
