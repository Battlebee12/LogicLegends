import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
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
        console.log("Login response:", response);
        if (response.status === 200) {
          const userData = response.data;
          // Store user data in local storage to maintain session
          localStorage.setItem('user', JSON.stringify(userData));
          // Redirect to event list page
          navigate("/event-list");
        } else {
          setLoginStatus("Invalid email or password.");
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setLoginStatus("Error logging in. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to Event Ticketing</h1>
        <p>Discover amazing things</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" onClick={login} className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out">Login</button>
        </form>
        <Link to="/sign-up" className="block text-blue-500 mt-4 hover:underline text-center">Don't have an account? Sign up here</Link>
        {loginStatus && <p className="text-red-500 mt-4">{loginStatus}</p>}
      </div>
    </div>
  );
};

export default Login;
