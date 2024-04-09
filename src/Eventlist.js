import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import Hero from './components/Hero';
import { Link } from 'react-router-dom';
import EventCat from './components/eventGrid';

const lightTheme = {
  background: '#fff',
  textColor: '#333',
  borderColor: '#e0e0e0',
  primaryColor: '#007bff', // Primary color - shades of blue
};

const darkTheme = {
  background: '#000', // Set background to black
  textColor: '#fff',
  borderColor: '#666',
  primaryColor: '#4d94ff', // Primary color - shades of blue
};

const EventListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px; /* Adjust padding as needed */
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const EventItem = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  padding: 20px;
  text-align: left;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }
`;

const EventTitle = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.primaryColor}; // Use primary color for event title
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
`;

const EventCatWrapper = styled.div`
padding: 30px 80px; /* Adjust padding as needed */
`;

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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
  
    if (!searchTerm) {
      setFilteredEvents(events); // Show all events if search term is empty
      return;
    }
  
    const filtered = events.filter((event) => {
      if (!event || (!event.title && !event.name)) return false; // Ensure event and either title or name exist
  
      const titleMatch = event.title && event.title.toLowerCase().includes(searchTerm);
      const nameMatch = event.name && event.name.toLowerCase().includes(searchTerm);
      
      return titleMatch || nameMatch;
    });
  
    setFilteredEvents(filtered);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  window.addEventListener('keydown', function(event) {
    if (event.key === '0') {
      localStorage.clear();
      console.log('Local storage cleared.');
    }
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div style={{ backgroundColor: darkMode ? '#000' : '#fff', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <div>
          <p1> .</p1>
        </div>
      
        
        <EventCatWrapper>
        <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'} text-center py-4 bg-${darkMode ? 'blue-800' : 'blue-500'} rounded-md`}>  Catogiries</h2>
          <EventCat/>
        </EventCatWrapper>
        <EventListWrapper>
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'} text-center py-4 bg-${darkMode ? 'blue-800' : 'blue-500'} rounded-md`}>  Events List</h2>

          <button onClick={toggleDarkMode} style={{ marginBottom: '20px', backgroundColor: darkMode ? '#4d94ff' : '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          <SearchBar
            type="text"
            placeholder="Search events..."
            onChange={handleSearch}
            data-testid="search-bar"
          />
          <EventGrid>
            {filteredEvents.map((event) => (
              <EventItem key={event.id} to={`/event-details/${event.id}`} data-testid="event-item">
                <EventTitle>{event.title}</EventTitle>
                <p>{event.name}</p>
              </EventItem>
            ))}
          </EventGrid>
        </EventListWrapper>
        
      </div>
    </ThemeProvider>
  );
};

export default EventList;
