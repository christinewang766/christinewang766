import React, {useEffect} from 'react'
import {Link } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'

import { AboutContainer, AboutWrapper, AboutRow, TextWrapper, Heading, Subtitle, ImgWrap, Img} from './AboutElements'
import { Button } from './ButtonElements'


import Placeholder from "../images/placeholderProfile.jpg"

const AboutSection = (isOpen, toggle) => {

    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, [])

  return (
    <>
    <AboutContainer id='about'>
   
        <AboutWrapper>
            <AboutRow>
                <TextWrapper> 
                    <Heading data-aos="fade-left" data-aos-easing="linear">"Hey, I'm Christine,"</Heading>
                   
                    <Subtitle data-aos="fade-left" data-aos-easing="linear">Inquisitive, creative, and analytical computer science undergraduate, with a strong foundation in math, logic, and object-oriented programming. Seeking a challenge to grow and push my capabilities to its fullest.<br></br><br></br>Also, I have a <b>STRONG</b> interest in animal-shaped pots!</Subtitle>
                    <Button lightText={true} to="/about-me" target="_blank" rel="noopener noreferrer">Want to<br></br>know more?</Button>
                </TextWrapper>
                <ImgWrap>
                <Img data-aos="fade-up" src={Placeholder} />
                </ImgWrap>
            </AboutRow>
        </AboutWrapper>
    </AboutContainer>
    </>
  );
};

export default AboutSection
