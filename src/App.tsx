import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';

import Navbar from "./components/Navbar";
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
