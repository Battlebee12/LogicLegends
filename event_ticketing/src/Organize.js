import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OrganizeEventWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  const [organizerName, setOrganizerName] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement event submission logic here
    console.log('Event details submitted:', {
      organizerName,
      eventName,
      eventDate,
      eventLocation,
      eventDescription,
    });
    // Reset form fields after submission
    setOrganizerName('');
    setEventName('');
    setEventDate('');
    setEventLocation('');
    setEventDescription('');
  };
  const handleNext = ()=>{
    Navigate
  }

  return (
    <OrganizeEventWrapper>
      <h2>Organize Your Event</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="organizerName">Organizer Name:</Label>
        <Input
          type="text"
          id="organizerName"
          value={organizerName}
          onChange={(e) => setOrganizerName(e.target.value)}
          required
        />

        <Label htmlFor="eventName">Event Name:</Label>
        <Input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />

        <Label htmlFor="eventDate">Event Date:</Label>
        <Input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />

        <Label htmlFor="eventLocation">Event Location:</Label>
        <Input
          type="text"
          id="eventLocation"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />

        <Label htmlFor="eventDescription">Event Description:</Label>
        <TextArea
          id="eventDescription"
          rows="4"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          required
        />

        <Button type="submit" onClick={handleNext}>Submit</Button>
      </Form>
    </OrganizeEventWrapper>
  );
};

export default OrganizeEvent;
