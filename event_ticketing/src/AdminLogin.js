import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const AdminLogin = () => {
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
    Axios.post("http://localhost:3002/admin/login", { email, password })
      .then((response) => {
        console.log("Login response:", response);
        if (response.status === 200) {
          // Login successful, redirect to admin dashboard 
          navigate("/admin-events");
        } else {
          // Invalid email or password
          setLoginStatus("Invalid email or password.");
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setLoginStatus("Error logging in. Please try again later.");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Login</h1>
        <form onSubmit={login} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">Login</button>
        </form>
        {loginStatus && <p className="text-red-500 mt-2">{loginStatus}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
