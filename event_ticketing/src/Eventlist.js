import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styled from 'styled-components';
import Hero from './components/Hero';
import SearchBar from './components/searchBar';
import Event from './components/Event';

// const EventListWrapper = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const EventItem = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   margin-bottom: 20px;
//   padding: 20px;
//   cursor: pointer; /* Add cursor pointer */
// `;

// const EventTitle = styled.h3`
//   margin-top: 0;
// `;

// // const SearchBar = styled.input`
// //   width: 100%;
// //   padding: 10px;
// //   margin-bottom: 20px;
// // `;

// const FilterSelect = styled.select`
//   padding: 10px;
//   margin-bottom: 20px;
// `;

// function EventList() {
//   const [events] = useState([
//     {
//       id: 1,
//       title: 'Demo Event 1',
//       description: 'Description of Demo Event 1',
//       date: '2024-03-15',
//       location: 'Location A',
//     },
//     {
//       id: 2,
//       title: 'Demo Event 2',
//       description: 'Description of Demo Event 2',
//       date: '2024-03-20',
//       location: 'Location B',
//     },
//     // Add more demo events as needed
//   ]);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterCriteria, setFilterCriteria] = useState('');

//   // Filter events based on search query and filter criteria
//   const filteredEvents = events.filter(event =>
//     event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
//     (filterCriteria === '' || event.location === filterCriteria)
//   );

//   return (
//     <div>

//    <Hero/>
//     <EventListWrapper>
//       <h2>Events List</h2>
//       <SearchBar onSearch={(query) => setSearchQuery(query)} />
//       <FilterSelect
//         value={filterCriteria}
//         onChange={e => setFilterCriteria(e.target.value)}
//       >
//         <option value="">All Locations</option>
//         {/* Replace with actual locations or categories */}
//         <option value="Location A">Location A</option>
//         <option value="Location B">Location B</option>
//       </FilterSelect>
//       {filteredEvents.map(event => (
//         <Link key={event.id} to={`/event-details/${event.id}`}> {/* Link to event details page */}
//           <EventItem>
//             <EventTitle>{event.title}</EventTitle>
//             <p>{event.description}</p>
//             <p>Date: {event.date}</p>
//             <p>Location: {event.location}</p>
//           </EventItem>
//         </Link>
//       ))}
//     </EventListWrapper>
//     </div>
//   );
// }

// export default EventList;


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
      <Hero />
      <div className='p-4'>
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
      </div>
      <div className='p-1 flex flex-wrap'>
        {filteredEvents.map((event) => (
          <div key={event.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <Event
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
          />
        </div>
        ))}
      </div>
    </div>
  );
};


export default EventList;

