import React from 'react';
import Admin from './Admin/Admin';
import './App.css';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <LoginForm />
    </div>
  );
}

export default App;
