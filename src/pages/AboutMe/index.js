import React from 'react'
import * as OpenAnything from "react-native-openanything"
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import { Button } from "react-native"

import { BackButton, ButtonWrap, TitleWrap, Title, ImgWrap, AboutContainer, AboutWrapper, TextWrapper, Heading, SubHead, AdjustBioContainer, AdjustBioWrap, ABTitle, Img, StyledPopup, ButtonShort, ButtonMedium, ButtonLong, Education, EducationDate, EducationDetails, EducationWrap, ButtonNativeWrap, UBCImg, UBCImgWrap } from './AboutMeElements'

import Placeholder from "./images/mePic.jpg"
import UBC from "./images/ubc.png"
// import Resume from "./images/resume.pdf"
import ScrollToTop from '../../components/ScrollToTop'

const AboutMe = () => {
  let navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <AboutContainer>
        <ButtonWrap>
          <BackButton onClick={() => navigate(-1)}>GO BACK</BackButton>
        </ButtonWrap>
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

            <ButtonNativeWrap>
              <Button color="none" title="Resume" onPress={() => OpenAnything.Pdf("https://drive.google.com/file/d/1iyiaCxbLTyjUQYJrZB54iABnK0zJqxJc/view?usp=share_link")}>Resume</Button>
            </ButtonNativeWrap>
            <AdjustBioContainer>
              <AdjustBioWrap>
                <ABTitle>Short on Time?<br></br>Choose Biography Length</ABTitle>
                <StyledPopup trigger={<ButtonShort>short</ButtonShort>}>
                  <div>I am an inquisitive, creative, and analytical computer science undergraduate at the University of British Columbia, with a strong foundation in math, logic, and object-oriented programming.</div>
                </StyledPopup>
                <StyledPopup trigger={<ButtonMedium>medium</ButtonMedium>}>
                  <div>Inquisitive, creative, and analytical computer science undergraduate at the University of British Columbia, with a strong foundation in math, logic, and object-oriented programming. Seeking a challenge to stack on new skills and push my limits.</div>
                </StyledPopup>
                <StyledPopup trigger={<ButtonLong>long</ButtonLong>}>
                  Born in New Zealand and raised in British Columbia, Canada, Christine Wang is a computer science undergraduate at the University of British Columbia with a strong foundation in math, logic, and object-oriented programming. They have a keen eye for design and a passion for bringing life to a program using languages such as JavaScript, Java, C++, C, and Racket. Currently, they are looking for challenges to stack on new skills and push their limits. <br></br>Also, they have a <b>STRONG</b> interest in animal-shaped pots! They are not a good gardener, but they can bake some mad cookies.
                </StyledPopup>
              </AdjustBioWrap>
            </AdjustBioContainer>
            <EducationWrap>
              <Education>EDUCATION</Education>
              <EducationDate><b>2021-present</b></EducationDate>
              <UBCImgWrap>
              <UBCImg src={UBC} />
            </UBCImgWrap>
              <EducationDetails>University of British Columbia<br></br>BSc majoring in Computer Science</EducationDetails>
            </EducationWrap>
          </TextWrapper>
        </AboutWrapper>

      </AboutContainer>
    </>
  );
};

export default AboutMe
