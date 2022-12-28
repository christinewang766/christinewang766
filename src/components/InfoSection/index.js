import React, {useEffect} from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, Heading, Subtitle, ImgWrap, Img} from './AboutElements'
import { Button } from './ButtonElements'


import Placeholder from "../images/placeholderProfile.jpg"

const InfoSection = ({darkBg, id, imgStart, lightText, headline, darkText}) => {

    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, [])

  return (
    <>
    <AboutContainer darkBg={darkBg} id={id}>
        <AboutWrapper>
            <AboutRow imgStart={imgStart}>
                <Column1>
                <TextWrapper> 
                    <Heading data-aos="fade-left" data-aos-easing="linear"
    lightText={lightText}>{headline}</Heading>
                    <Subtitle data-aos="fade-left" data-aos-easing="linear"
      darkText={darkText}>Inquisitive, creative, and analytical computer science undergraduate, with a strong foundation in math, logic, and object-oriented programming. Seeking a challenge to grow and push my capabilities to its fullest.<br></br><br></br>Also, I have a <b>STRONG</b> interest in animal-shaped pots!</Subtitle>
                    <Button to='home' smooth={true} offset={-80} lightText={true}>Want to<br></br>know more?</Button>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img data-aos="fade-up" src={Placeholder} />
                </ImgWrap>
                </Column2>
            </AboutRow>
        </AboutWrapper>
    </AboutContainer>
    </>
  );
};

export default InfoSection
