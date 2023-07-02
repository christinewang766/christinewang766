import React, { useState } from "react";
import FrontHome from "../components/HomePages/FrontHome";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkSection from "../components/HomePages/WorkSection";
import ProjectsSection from "../components/HomePages/ProjectsSection";
import SkillsSection from "../components/HomePages/SkillsSection";
import AboutSection from "../components/HomePages/AboutSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  let toggle: () => void = function () {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FrontHome />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default Home;
