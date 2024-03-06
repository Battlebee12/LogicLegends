import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const LandingContentWrapper = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const LoginSection = styled.section`
  margin-top: 50px;
`;

const LoginForm = styled.form`
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

const LoginButton = styled.button`
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

const SignupLink = styled(Link)`
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginStatus("Email and password are required.");
      return;
    }
    Axios.post("http://localhost:3002/login", { email, password })
      .then((response) => {
        setLoginStatus(response.data.message);
        if (response.status === 200) {
          // Set user information in local storage upon successful login
          localStorage.setItem('user', JSON.stringify(response.data.user));
          // Redirect to ListEvents.js after successful login
          navigate("/");
        }
      })
      .catch((error) => {
        setLoginStatus("Error logging in.");
      });
  };

  return (
    <LandingContentWrapper>
      <header>
        <h1>Welcome to Event Ticketing</h1>
        <p>Discover amazing things</p>
      </header>
      <main>
        <LoginSection>
          <h2>Login</h2>
          <LoginForm>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password:</Label>
              <Input type="password" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" required />
            </FormGroup>
            <LoginButton type="submit" onClick={login}>Login</LoginButton>
          </LoginForm>
          <SignupLink to="/sign-up">Don't have an account? Sign up here</SignupLink>
        </LoginSection>
      </main>
    </LandingContentWrapper>
  );
}

export default Login;
