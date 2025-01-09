import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../images/profile.png";


import {
  AboutContainer,
  AboutWrapper,
  TextWrapper,
  Heading,
  Description,
  ImgWrap,
  Img,
  Button
} from "./AboutElements";

const AboutSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);


  var img = new Image();
  img.src = '../images/aoxPot.png';

  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <TextWrapper>
            <Heading data-aos="fade-left" data-aos-easing="linear">
              "Hey, I'm Christine,"
            </Heading>
            <Description data-aos="fade-left" data-aos-easing="linear">
              Creative, and analytical 3rd year computer science student at the University of British Columbia, with a strong foundation in logic and object-oriented programming. Christine has a year of Co-Op experience, and they have a passion for bringing a program to life using languages like TypeScript, JavaScript, Java, C++, HTML, and CSS.
            </Description>
            <Button to="/about-me">
              Want to<br></br>know more?
            </Button>
          </TextWrapper>
          <ImgWrap>
            <Img data-aos="fade-up" src={Profile} />
          </ImgWrap>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
