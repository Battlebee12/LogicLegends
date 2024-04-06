import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios';
import Navbar from './Navbar';

// Styled-components for styling
const OrganizeEventWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const OrganizeEvent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketsAvailable, setTicketsAvailable] = useState('');
  const [venue, setVenue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Constructing the event data
    const eventData = {
      name: name.trim(),
      description,
      date,
      ticketPrice,
      ticketsAvailable,
      venue
    };

    try {
      const response = await Axios.post('http://localhost:3002/events', eventData);
      
      // Check response status code
      if (response.status === 200 || response.status === 201) {
        setMessage('Event created successfully.');
        navigate('/event-list'); // Navigate after successful creation
      } else {
        setMessage('Failed to create event. Please try again.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      setMessage('Error creating event. Please check your input and try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <OrganizeEventWrapper>
        <h2>Organize Your Event</h2>
        <Form onSubmit={handleSubmit}>
          {/* Input fields remain unchanged */}
          <Label htmlFor="name">Event Name:</Label>
          <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <Label htmlFor="description">Event Description:</Label>
          <TextArea id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required />

          <Label htmlFor="date">Event Date:</Label>
          <Input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <Label htmlFor="ticketPrice">Ticket Price:</Label>
          <Input type="number" id="ticketPrice" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)} required />

          <Label htmlFor="ticketsAvailable">Tickets Available:</Label>
          <Input type="number" id="ticketsAvailable" value={ticketsAvailable} onChange={(e) => setTicketsAvailable(e.target.value)} required />

          <Label htmlFor="venue">Venue:</Label>
          <Input type="text" id="venue" value={venue} onChange={(e) => setVenue(e.target.value)} required />

          <Button type="submit">Create Event</Button>
        </Form>
        {message && <p>{message}</p>}
      </OrganizeEventWrapper>
    </div>
  );
};

export default OrganizeEvent;
