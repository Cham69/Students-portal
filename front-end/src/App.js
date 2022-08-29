import React, { useState } from 'react';
import Admin from './Admin/Admin';
import './App.css';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Student from './Student/Student';

function App() {
  const [userType, setUserType] = useState('admi');
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/dashboard" element={userType=='admin'?<Admin />:<Student />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
