// EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const EventDetailsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function EventDetails() {
  const { id } = useParams();

  // Dummy event details data (replace with actual data fetching or storage)
  const eventDetails = {
    1: {
      title: 'Event 1',
      description: 'Description of Event 1',
      date: '2024-03-15',
      location: 'Location of Event 1',
      organizer: 'Organizer Name 1',
    },
    2: {
      title: 'Event 2',
      description: 'Description of Event 2',
      date: '2024-03-20',
      location: 'Location of Event 2',
      organizer: 'Organizer Name 2',
    },
  };

  // Get event details based on the id from URL parameters
  const selectedEvent = eventDetails[id];

  return (
    <EventDetailsWrapper>
      <h2>Event Details</h2>
      <h3>{selectedEvent.title}</h3>
      <p><strong>Description:</strong> {selectedEvent.description}</p>
      <p><strong>Date:</strong> {selectedEvent.date}</p>
      <p><strong>Location:</strong> {selectedEvent.location}</p>
      <p><strong>Organizer:</strong> {selectedEvent.organizer}</p>
    </EventDetailsWrapper>
  );
}

export default EventDetails;
