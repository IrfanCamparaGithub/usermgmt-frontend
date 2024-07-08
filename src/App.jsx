import { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './addUser'; 
import EditUser from './EditUser';
import ViewUser from './ViewUser';

function App() {
  

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/adduser" element={<AddUser />} />
          <Route path= "/edituser/:id" element={<EditUser />} /> 
          <Route path = "/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
