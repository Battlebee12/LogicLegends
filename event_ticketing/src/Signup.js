import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/register", {
      email: email,
      name: name,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
        if (response.status === 200) {
          // Navigate to login screen after successful account creation
          navigate("/login");
        }
      } else {
        setRegisterStatus("Error creating account.");
      }
    }).catch((error) => {
      setRegisterStatus("Error creating account.");
    });
  };

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
              <Input type="text" id="fullName" name="fullName" onChange={(e) => { setName(e.target.value) }} placeholder="Enter your full name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password:</Label>
              <Input type="password" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" required />
            </FormGroup>
            <SignupButton type="submit" onClick={register}>Sign Up</SignupButton>
          </SignupForm>
          <LoginLink to="/login">Already have an account? Log in here</LoginLink>
          {registerStatus && <p>{registerStatus}</p>}
        </SignupSection>
      </main>
    </SignupWrapper>
  );
}

export default Signup;
