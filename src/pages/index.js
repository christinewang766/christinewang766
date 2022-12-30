import React, {useState} from 'react';
import FrontHome from '../components/HomePages/FrontHome';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skills from '../components/HomePages/SkillsSection';
import AboutSection from '../components/HomePages/AboutSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} /> 
    <Navbar toggle={toggle} />
    <FrontHome />
    <AboutSection />
    <Skills />
    <Footer />
    </>
  )
}

export default Home
