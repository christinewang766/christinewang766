import React, {useState} from 'react';
import FrontHome from '../components/HomePages/FrontHome';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AboutMe from '../components/HomePages/AboutMe';
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
    {/* <FrontHome /> */}
    {/* <AboutSection /> */}
    <AboutMe />
    {/* <SkillsSection {...skillsSection} /> */}
    </>
  )
}

export default Home
