// EventList.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for better styling
const EventListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const EventItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
`;

const EventTitle = styled.h3`
  color: #333;
`;

const EventDescription = styled.p`
  color: #666;
`;

const EventDate = styled.p`
  color: #777;
`;

const EventLocation = styled.p`
  color: #777;
`;

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
    <EventListContainer>
      <h2>Events List</h2>
      {events.map(event => (
        <EventItem key={event.id}>
          <EventTitle>{event.title}</EventTitle>
          <EventDescription>{event.description}</EventDescription>
          <EventDate>Date: {event.date}</EventDate>
          <EventLocation>Location: {event.location}</EventLocation>
        </EventItem>
      ))}
    </EventListContainer>
  );
}

export default EventList;
