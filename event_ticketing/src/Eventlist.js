import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hero from './components/Hero';
import SearchBar from './components/searchBar';
import Navbar from './Navbar';

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
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
`;

const EventTitle = styled.h3`
  margin-top: 0;
`;

const EventList = () => {
  const [events] = useState([
    {
      id: 1,
      title: 'Demo Event 1',
      description: 'Description of Demo Event 1',
      date: '2024-03-15',
      location: 'Location A',
    },
    {
      id: 2,
      title: 'Demo Event 2',
      description: 'Description of Demo Event 2',
      date: '2024-03-20',
      location: 'Location B',
    },
    {
      id: 3,
      title: 'Diljit',
      description: 'Concert',
      date: '2024-03-20',
      location: 'Location B',
    },
    {
      id: 4,
      title: 'Karan Aujla',
      description: 'Concert',
      date: '2024-03-20',
      location: 'Location B',
    },
    // Add more demo events as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Filter events based on search query
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar/>
      <Hero />
      <EventListWrapper>
        <h2>Events List</h2>
        <SearchBarWrapper>
          <SearchBar onSearch={(query) => setSearchQuery(query)} />
        </SearchBarWrapper>
        <EventGrid>
          {filteredEvents.map((event) => (
            <EventItem key={event.id} to={`/event-details/${event.id}`}>
              <EventTitle>{event.title}</EventTitle>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </EventItem>
          ))}
        </EventGrid>
      </EventListWrapper>
    </div>
  );
};

const SearchBarWrapper = styled.div`
  margin-bottom: 20px;
`;

export default EventList;
