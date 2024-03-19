import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import Axios from 'axios';

// Mock Axios post method
jest.mock('axios');

describe('Login component', () => {
  it('renders login form', () => {
    render(<Login />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('submits login form with valid credentials', async () => {
    const mockUserData = {
      message: 'Login successful.',
      name: 'John Doe',
      email: 'john@example.com'
    };
    const navigateMock = jest.fn();
    Axios.post.mockResolvedValue({ status: 200, data: mockUserData });

    render(<Login />);
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => expect(Axios.post).toHaveBeenCalledTimes(1));

    expect(Axios.post).toHaveBeenCalledWith('http://localhost:3002/login', {
      email: 'john@example.com',
      password: 'password123'
    });

    expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockUserData));
    expect(navigateMock).toHaveBeenCalledWith('/event-list');
  });

  it('displays error message for invalid credentials', async () => {
    const navigateMock = jest.fn();
    Axios.post.mockRejectedValue({ response: { status: 401 } });

    render(<Login />);
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'invalid@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'invalidPassword' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => expect(Axios.post).toHaveBeenCalledTimes(1));

    expect(Axios.post).toHaveBeenCalledWith('http://localhost:3002/login', {
      email: 'invalid@example.com',
      password: 'invalidPassword'
    });

    expect(screen.getByText(/Invalid email or password./i)).toBeInTheDocument();
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
