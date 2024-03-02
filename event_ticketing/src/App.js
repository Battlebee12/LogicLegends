
import './App.css';
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
// Example: Correct import for Link
import { Link, Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Header />
      <Welcome />
      Hello from event ticketing platform
      
    </div>
  );
}

export default App;
