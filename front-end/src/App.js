import React from 'react';
import Admin from './Admin/Admin';
import UserList from './Admin/UserList';
import './App.css';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar';
import EditProfile from './Student/EditProfile';
import NotesList from './Student/NotesList';
import Error from './Components/Error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
