import React, {useState} from 'react';
import FrontHome from '../components/FrontHome';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import { aboutSection } from '../components/InfoSection/AboutData';

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
    <InfoSection {...aboutSection} />
    </>
  )
}

export default Home
