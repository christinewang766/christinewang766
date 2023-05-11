import React, {useEffect} from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { AboutContainer, AboutWrapper, TextWrapper, Heading, Description, ImgWrap, Img} from './AboutElements'
import { Button } from './ButtonElements'


import Profile from "../images/profile.jpg"

const AboutSection = () => {

    useEffect(() => {
        AOS.init({ duration: 1200, once:true});
      }, [])

  return (
    <>
    <AboutContainer id='about'>
            <AboutWrapper>
                <TextWrapper> 
                    <Heading data-aos="fade-left" data-aos-easing="linear">"Hey, I'm Christine,"</Heading>
                    <Description data-aos="fade-left" data-aos-easing="linear">Inquisitive, creative, and analytical computer science student at the University of British Columbia, with a strong foundation in math, logic, and object-oriented programming. Christine has a passion for bringing a program to life using languages like C++, C, Java, JavaScript, TypeScript, R, HTML, CSS, and Racket.</Description>
                    <Button lightText={true} to="/about-me">Want to<br></br>know more?</Button>
                </TextWrapper>
                <ImgWrap>
                <Img data-aos="fade-up" src={Profile} />
                </ImgWrap>
            </AboutWrapper>
    </AboutContainer>
    </>
  );
};

export default AboutSection
