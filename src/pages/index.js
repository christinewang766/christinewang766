import React, {useState} from 'react';
import FrontHome from '../components/HomePages/FrontHome';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkSection from '../components/HomePages/WorkSection';
import SkillsSection from '../components/HomePages/SkillsSection';
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
    <SkillsSection />
    <WorkSection />
    <Footer />
    </>
  )
}

export default Home
