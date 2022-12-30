import React from 'react';

import AboutMe from './pages/AboutMe';
import Home from './pages';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aos from 'aos'

function App() {
  Aos.init();
 
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about-me' element={<AboutMe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
