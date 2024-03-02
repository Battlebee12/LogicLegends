// EventList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styled from 'styled-components';

const EventListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const EventItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer; /* Add cursor pointer */
`;

const EventTitle = styled.h3`
  margin-top: 0;
`;

function EventList() {
  const [events] = useState([
    {
      id: 1,
      title: 'Demo Event 1',
      description: 'Description of Demo Event 1',
      date: '2024-03-15',
      location: 'Location of Demo Event 1',
    },
    {
      id: 2,
      title: 'Demo Event 2',
      description: 'Description of Demo Event 2',
      date: '2024-03-20',
      location: 'Location of Demo Event 2',
    },
    // Add more demo events as needed
  ]);

  return (
    <EventListWrapper>
      <h2>Events List</h2>
      {events.map(event => (
        <Link key={event.id} to={`/event-details/${event.id}`}> {/* Link to event details page */}
          <EventItem>
            <EventTitle>{event.title}</EventTitle>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </EventItem>
        </Link>
      ))}
    </EventListWrapper>
  );
}

export default EventList;
