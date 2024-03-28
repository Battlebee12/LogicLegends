import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Hero from './components/Hero';
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

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3002/events');
        const eventData = await response.json();
        setEvents(eventData);
        setFilteredEvents(eventData); // Initially set filteredEvents to all events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
  
    console.log("Search Term:", searchTerm);
  
    if (!searchTerm) {
      setFilteredEvents(events); // Show all events if search term is empty
      return;
    }
  
    const filtered = events.filter((event) => {
      console.log("Event:", event);
      if (!event || (!event.title && !event.name)) return false; // Ensure event and either title or name exist
  
      const titleMatch = event.title && event.title.toLowerCase().includes(searchTerm);
      const nameMatch = event.name && event.name.toLowerCase().includes(searchTerm);
      
      console.log("Title Match:", titleMatch);
      console.log("Name Match:", nameMatch);
  
      return titleMatch || nameMatch;
    });
  
    console.log("Filtered Events:", filtered);
  
    setFilteredEvents(filtered);
  };
  

  return (
    <div>
      <Navbar />
      <Hero />
      <EventListWrapper>
        <h2>Events List</h2>
        <SearchBar
          type="text"
          placeholder="Search events..."
          onChange={handleSearch}
          data-testid="search-bar"
        />
        <EventGrid>
          {filteredEvents.map((event) => (
            <EventItem key={event.id} to={`/event-details/${event.id}`}
            data-testid="event-item">
              <EventTitle>{event.title}</EventTitle>
              <p>{event.name}</p>
            </EventItem>
          ))}
        </EventGrid>
      </EventListWrapper>
    </div>
  );
};

export default EventList;
