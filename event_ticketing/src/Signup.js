import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Signup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("Canada");
  const [zipCode, setZipCode] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/register", {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      country: country,
      zipCode: zipCode
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Event Ticketing Platform</h1>
        <p>Sign up to explore events</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-ce">
        <h2 className="text-2xl font-bold mb-6 mx-auto text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address:</label>
            <input type="email" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">First Name:</label>
            <input type="text" id="firstName" name="firstName" onChange={(e) => { setFirstName(e.target.value) }} placeholder="Enter your first name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">Last Name:</label>
            <input type="text" id="lastName" name="lastName" onChange={(e) => { setLastName(e.target.value) }} placeholder="Enter your last name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700">Country of Residence:</label>
            <select id="country" name="country" onChange={(e) => { setCountry(e.target.value) }} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="Canada">Canada</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-gray-700">Zip/Postal Code:</label>
            <input type="text" id="zipCode" name="zipCode" onChange={(e) => { setZipCode(e.target.value) }} placeholder="Enter your zip/postal code" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" onClick={register} className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out">Sign Up</button>
        </form>
        <Link to="/" className="block text-blue-500 mt-4 hover:underline">Already have an Eventify Account? Login </Link>
        {registerStatus && <p className="text-red-500 mt-4">{registerStatus}</p>}
      </div>
    </div>
  );
}

export default Signup;
