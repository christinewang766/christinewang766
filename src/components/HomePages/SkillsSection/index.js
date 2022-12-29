import React, {useEffect} from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { SkillsContainer, SkillsWrapper, SkillsRow, Column1, Column2, TextWrapper, Heading, Subtitle, ImgWrap, Img} from './SkillsElements'
import { Button } from './ButtonElements'


import Placeholder from "../images/placeholderProfile.jpg"

const SkillsSection = ({darkBg, id, imgStart, lightText, headline, darkText}) => {

    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, [])

  return (
    <>
    <SkillsContainer darkBg={darkBg} id={id}>
        <SkillsWrapper>
            <SkillsRow imgStart={imgStart}>
                <Column1>
                <TextWrapper> 
                    <Heading data-aos="fade-left" data-aos-easing="linear"
    lightText={lightText}>{headline}</Heading>
                    <Subtitle data-aos="fade-left" data-aos-easing="linear"
      darkText={darkText}>Inquisitive, creative, and analytical computer science undergraduate, with a strong foundation in math, logic, and object-oriented programming. Seeking a challenge to grow and push my capabilities to its fullest.<br></br><br></br>Also, I have a <b>STRONG</b> interest in animal-shaped pots!</Subtitle>
                    <Button smooth={true} offset={-80} lightText={true}>Want to<br></br>know more?</Button>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img data-aos="fade-up" src={Placeholder} />
                </ImgWrap>
                </Column2>
            </SkillsRow>
        </SkillsWrapper>
    </SkillsContainer>
    </>
  );
};

export default SkillsSection
