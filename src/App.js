import React from 'react';
import SigninPage from './pages/signin';
import AboutMe from './pages/AboutMe';
import Home from './pages';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aos from 'aos'
import ScrollUpButton from './components/ScrollUpButton';

function App() {
  Aos.init();
 
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/signin' element={<SigninPage />}></Route>
      <Route exact path='/about-me' element={<AboutMe />}></Route>
      </Routes>
      <ScrollUpButton />
    </Router>
  );
}

export default App;
