import React from 'react';
//import './App.css';

import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contacts from './pages/Contacts';



function App() {
  return (
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path='/contacts' element={<Contacts/>}/>
  </Routes>
  );
}

export default App;
