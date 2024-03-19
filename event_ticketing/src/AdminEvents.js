// Code for the AdminEvents component (for the admin dashboard)
import React, { useState } from 'react';


// Example data for events (you can replace this with actual data from an API or database)
const eventsData = [
   {
     id: 1,
     organizer: 'Organizer A',
     name: 'Event 1',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     location: 'Location A',
     ageRestriction: '18+',
     capacity: 100,
     type: 'Music Concert',
     status: 'pending', // status can be 'pending', 'approved', or 'rejected'
   },
   {
     id: 2,
     organizer: 'Organizer B',
     name: 'Event 2',
     description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     location: 'Location B',
     ageRestriction: '21+',
     capacity: 50,
     type: 'Art Exhibition',
     status: 'pending',
   },
   {
     id: 3,
     organizer: 'Organizer C',
     name: 'Event 3',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     location: 'Location C',
     ageRestriction: '16+',
     capacity: 80,
     type: 'Dance Party',
     status: 'approved',
   },
   {
     id: 4,
     organizer: 'Organizer D',
     name: 'Event 4',
     description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     location: 'Location D',
     ageRestriction: '18+',
     capacity: 120,
     type: 'Conference',
     status: 'rejected',
   },
   {
     id: 5,
     organizer: 'Organizer E',
     name: 'Event 5',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     location: 'Location E',
     ageRestriction: '19+',
     capacity: 60,
     type: 'Exhibition',
     status: 'pending',
   },
   {
     id: 6,
     organizer: 'Organizer F',
     name: 'Event 6',
     description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     location: 'Location F',
     ageRestriction: '18+',
     capacity: 150,
     type: 'Workshop',
     status: 'approved',
   },
 ];


 const AdminEvents = () => {
   const [events, setEvents] = useState(eventsData);
    const handleApprove = (eventId) => {
     // Update the status of the event to 'approved'
     const updatedEvents = events.map((event) =>
       event.id === eventId ? { ...event, status: 'approved' } : event
     );
     setEvents(updatedEvents);
   };
    const handleReject = (eventId) => {
     // Update the status of the event to 'rejected'
     const updatedEvents = events.map((event) =>
       event.id === eventId ? { ...event, status: 'rejected' } : event
     );
     setEvents(updatedEvents);
   };
    const handleReadMore = (eventId) => {
     const updatedEvents = events.map((event) =>
       event.id === eventId ? { ...event, showFullDescription: true } : event
     );
     setEvents(updatedEvents);
   };
    return (
     <div className="p-4 flex flex-wrap">
       <h2 className="text-2xl font-semibold mb-4 w-full">Manage Events</h2>
       {events.map((event) => (
         <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
           <div className="bg-white rounded-lg shadow-md p-4">
             <strong>Event ID:</strong> {event.id}<br />
             <strong>Organizer:</strong> {event.organizer}<br />
             <strong>Name:</strong> {event.name}<br />
             {event.showFullDescription ? (
               <div>
                 <strong>Description:</strong> {event.description}<br />
               </div>
             ) : (
               <div>
                 <strong>Description:</strong> {event.description.substring(0, 60)}...
                 <button
                   className="text-blue-500 ml-2"
                   onClick={() => handleReadMore(event.id)}
                 >
                   Read More
                 </button>
               </div>
             )}
             <strong>Location:</strong> {event.location}<br />
             <strong>Age Restriction:</strong> {event.ageRestriction}<br />
             <strong>Capacity:</strong> {event.capacity}<br />
             <strong>Type:</strong> {event.type}<br />
             <strong>Status:</strong> {event.status}
             {event.status === 'pending' && (
               <div className="flex justify-between mt-4">
                 <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600" onClick={() => handleApprove(event.id)}>Approve</button>
                 <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600" onClick={() => handleReject(event.id)}>Reject</button>
               </div>
             )}
           </div>
         </div>
       ))}
     </div>
   );
 };
  export default AdminEvents;
