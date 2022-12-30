import React, {useState} from 'react';
import FrontHome from '../components/HomePages/FrontHome';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import AboutSection from '../components/HomePages/AboutSection';
import SkillsSection from '../components/HomePages/SkillsSection';
import { skillsSection } from '../components/HomePages/SkillsSection/SkillsData';

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
    <Services />
    <SkillsSection {...skillsSection} />
    <Footer />
    </>
  )
}

export default Home
