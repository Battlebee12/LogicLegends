// LandingContent.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ticket from "./Images/ticket.png"


function LandingContent() {
  return (

      <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold text-tropical-blue-800 mb-4">Welcome to Event Ticketing</h1>
          <p className="text-lg text-gray-600 mb-8">Discover amazing things</p>
        </header>
        <main className="max-w-md mx-auto bg-gray-50 rounded-lg shadow-2xl p-8">
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-left text-tropical-blue font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-base border border-solid border-gray-300 rounded transition duration-300 focus:outline-none focus:border-tropical-blue"
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
                  required
                />
              </div>
              <Link to="/event-list">
                <button type="button" className="w-full px-4 py-3 text-base bg-tropical-blue-500 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-600">
                  Login
                </button>
              </Link>
              <p className="text-gray-700 mt-4">Don't have an account? <Link to="/sign-up" className="text-tropical-blue-500">Signup</Link></p>
              <p className="text-gray-700">Admin? <Link to="/admin-login" className="text-tropical-blue-500">Admin Login</Link></p>
            </form>
          </section>
        </main>
      </div>

  );
}

export default LandingContent;



