import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios';

const OrganizeEventWrapper = styled.div`
  max-width: 600px;
  margin: 0.1 auto;
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
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = name.trim();

    try {
      const response = await Axios.post('http://localhost:3002/events', {
        name: trimmedName,
        description: description,
        date: date
      });
      setMessage(response.data.message);
      // Redirect to EventList after successful event creation
      navigate('/event-list');
    } catch (error) {
      console.error('Error creating event:', error);
      setMessage('Error creating event');
    }
  };

  return (
    <OrganizeEventWrapper>
      <h2>Organize Your Event</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Event Name:</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Label htmlFor="description">Event Description:</Label>
        <TextArea
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Label htmlFor="date">Event Date:</Label>
        <Input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Button type="submit">Create Event</Button>
      </Form>
      {message && <p>{message}</p>}
    </OrganizeEventWrapper>
  );
};

export default OrganizeEvent;
