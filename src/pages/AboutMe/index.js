import React from 'react'

import 'aos/dist/aos.css'

import { TitleWrap, Title, ImgWrap, AboutContainer, AboutWrapper, TextWrapper, Heading, SubHead, AdjustBioContainer, AdjustBioWrap, ABTitle, Img, StyledPopup, ButtonShort, ButtonMedium, ButtonLong} from './AboutMeElements'

import Placeholder from "./images/mePic.jpg"

const AboutMe = () => {

  return (
    <>
    <AboutContainer>
    <TitleWrap>
    <Title>ABOUT ME</Title>
    </TitleWrap>
        <AboutWrapper>
                <TextWrapper>
                  <ImgWrap>
                <Img src={Placeholder} />
                </ImgWrap>
                <Heading>"I'm Christine,"</Heading>
                <SubHead><i>she/her or any pronouns</i></SubHead>
                    <AdjustBioContainer>
                        <AdjustBioWrap>
                            <ABTitle>Short on Time?<br></br>Choose Biography Length</ABTitle>
                            <StyledPopup trigger={<ButtonShort>short</ButtonShort>}> 
                    <div>I am inquisitive, creative, and analytical computer science undergraduate at the University of British Columbia, with a strong foundation in math, logic, and object-oriented programming.</div>
                    </StyledPopup>
                    <StyledPopup trigger={<ButtonMedium>medium</ButtonMedium>}>
    <div>Inquisitive, creative, and analytical computer science undergraduate at the University of British Columbia, with a strong foundation in math, logic, and object-oriented programming. Seeking a challenge to stack on new skills and push my limits.</div>
  </StyledPopup>
                    <StyledPopup trigger={<ButtonLong>long</ButtonLong>}>
Born in New Zealand and raised in British Columbia, Canada, Christine Wang is a computer science undergraduate at the University of British Columbia with a strong foundation in math, logic, and object-oriented programming. They have a keen eye for design and a passion for bringing life to a program using languages such as JavaScript, Java, C++, and Racket. Currently, they are looking for challenges to stack on new skills and push their limits. <br></br>Also, they have a <b>STRONG</b> interest in animal-shaped pots! They are not a good gardener, but they can bake some mad cookies.
  </StyledPopup>
                        </AdjustBioWrap>
                    </AdjustBioContainer>
                
                </TextWrapper>
        </AboutWrapper>
    </AboutContainer>
    </>
  );
};

export default AboutMe
