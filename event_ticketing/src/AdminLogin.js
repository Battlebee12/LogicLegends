import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminLoginWrapper = styled.div`
text-align: center;
padding: 50px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const AdminLoginForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

const AdminLoginButton = styled.button`
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

const BackToLoginLink = styled(Link)`
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function AdminLogin() {
    const emailRef = useRef();
    const passwordRef = useRef();
  
    const handleAdminLogin = (e) => {
      e.preventDefault();
      // Add your admin login logic here
    };
  
    return (
      <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold mb-8">Admin Login</h1>
        </header>
        <main>
          <form onSubmit={handleAdminLogin} className="max-w-md mx-auto bg-gray-50 rounded-lg shadow-2xl p-8">
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-tropical-blue font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-base border border-solid border-gray-300 rounded transition duration-300 focus:outline-none focus:border-tropical-blue"
                ref={emailRef}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-left text-tropical-blue font-bold mb-2">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-base border border-solid border-gray-300 rounded transition duration-300 focus:outline-none focus:border-tropical-blue"
                ref={passwordRef}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-base bg-tropical-blue-500 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-600"
            >
              Login
            </button>
            <div className="mt-4">
              <Link to="/login" className="text-tropical-blue-500">Back to Login</Link>
            </div>
            <div className="mt-2">
              <Link to="/admin-signup" className="text-tropical-blue-500">Signup-admin</Link>
            </div>
          </form>
        </main>
      </div>
    );
  }

export default AdminLogin;
