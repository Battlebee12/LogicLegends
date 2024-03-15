import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Hero from './components/Hero';
import SearchBar from './components/searchBar'; // Assuming you have a SearchBar component
import { Link } from 'react-router-dom';

const EventListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const EventItem = styled(Link)`
  display: block;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: left;
  text-decoration: none;
  color: #333;
  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
`;

const EventTitle = styled.h3`
  margin-top: 0;
`;

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3002/events');
        const eventData = await response.json();
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <EventListWrapper>
        <h2>Events List</h2>
        <SearchBar />
        <EventGrid>
          {events.map((event) => (
            <EventItem key={event.id} to={`/event-details/${event.id}`}>
              <EventTitle>{event.title}</EventTitle>
              <p>{event.name}</p>
              <p>Date: {event.date}</p>
            </EventItem>
          ))}
        </EventGrid>
      </EventListWrapper>
    </div>
  );
};

export default EventList;
