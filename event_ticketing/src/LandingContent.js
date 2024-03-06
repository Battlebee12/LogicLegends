import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const LoginWrapper = styled.div`
  text-align: center;
  padding: 50px 20px;
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
          // Redirect to ListEvents.js after successful login
          navigate("/");
        }
      })
      .catch((error) => {
        setLoginStatus("Error logging in.");
      });
  };

  return (
    <LoginWrapper>
      <h2>Login</h2>
      <LoginForm>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
        </FormGroup>
        <LoginButton type="submit" onClick={login}>Login</LoginButton>
      </LoginForm>
      <p>{loginStatus}</p>
      <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
    </LoginWrapper>
  );
}

export default Login;
