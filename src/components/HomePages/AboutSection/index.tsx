import React, { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
// @ts-ignore
import Profile from "../images/profile.jpg";


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

  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <TextWrapper>
            <Heading data-aos="fade-left" data-aos-easing="linear">
              "Hey, I'm Christine,"
            </Heading>
            <Description data-aos="fade-left" data-aos-easing="linear">
              Inquisitive, creative, and analytical computer science student at
              the University of British Columbia, with a strong foundation in
              math, logic, and object-oriented programming. Christine has a
              passion for bringing a program to life using languages like C++,
              C, Java, JavaScript, TypeScript, R, HTML, CSS, and Racket.
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
