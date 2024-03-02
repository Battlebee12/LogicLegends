import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignupWrapper = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const SignupSection = styled.section`
  margin-top: 50px;
`;

const SignupForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 30%;
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  flex: 0 0 70%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginLink = styled(Link)`
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Signup() {
  return (
    <SignupWrapper>
      <header>
        <h1>Event Ticketing Platform</h1>
        <p>Sign up to explore events</p>
      </header>
      <main>
        <SignupSection>
          <h2>Sign Up</h2>
          <SignupForm>
            <FormGroup>
              <Label htmlFor="fullName">Full Name:</Label>
              <Input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" name="email" placeholder="Enter your email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password:</Label>
              <Input type="password" id="password" name="password" placeholder="Enter your password" required />
            </FormGroup>
            <Link to="/event-list">
            <SignupButton type="submit">Sign Up</SignupButton>

            </Link>
            
          </SignupForm>
          <LoginLink to="/">Already have an account? Log in here</LoginLink>
        </SignupSection>
      </main>
    </SignupWrapper>
  );
}

export default Signup;
