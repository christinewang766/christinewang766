import React from 'react'
import * as OpenAnything from "react-native-openanything"
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import { Button } from "react-native"

import { BackButton, ButtonWrap, TitleWrap, Title, ImgWrap, AboutContainer, AboutWrapper, TextWrapper, Heading, SubHead, AdjustBioContainer, AdjustBioWrap, ABTitle, Img, StyledPopup, ButtonShort, ButtonMedium, ButtonLong, Education, EducationDate, EducationDetails, EducationWrap, ButtonNativeWrap, UBCImg, UBCImgWrap } from './AboutMeElements'

import Placeholder from "./images/mePic.jpg"
import UBC from "./images/ubc.png"
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
              <Button color="none" title="Resume" onPress={() => OpenAnything.Pdf("https://drive.google.com/file/d/1owhiwkM1-1woc5zHu0OTwnfgO3sqWDte/view?usp=sharing")}>Resume</Button>
            </ButtonNativeWrap>
            <AdjustBioContainer>
              <AdjustBioWrap>
                <ABTitle>Short on Time?<br></br>Choose Biography Length</ABTitle>
                <StyledPopup trigger={<ButtonShort>short</ButtonShort>}>
                  <div>Try-hard computer science student at the University of British Columbia. I'm friendly and will bake your favourite cookies!<br></br><br></br>Technical Languages: C++, C, Java, JavaScript, TypeScript, R, HTML, CSS, and Racket</div>
                </StyledPopup>
                <StyledPopup trigger={<ButtonMedium>medium</ButtonMedium>}>
                  <div>Inquisitive, creative, and analytical computer science student at the University of British Columbia, with a strong foundation in math, logic, and object-oriented programming. Christine has a passion for bringing a program to life using languages like C++, C, Java, JavaScript, TypeScript, R, HTML, CSS, and Racket, as well as development tools like Git/GitHub, Visual Studio Code, Node.js, Figma, Excel, RStudio, Jupyter Notebook, and Photoshop.</div>
                </StyledPopup>
                <StyledPopup trigger={<ButtonLong>long</ButtonLong>}>
                Born in New Zealand and raised in British Columbia, Canada, Christine Wang is a computer science student at the University of British Columbia with a strong foundation in math, logic, and object-oriented programming. Christine has a passion for bringing a program to life using languages like C++, C, Java, JavaScript, TypeScript, R, and Racket, HTML, CSS, as well as development tools like Git/GitHub, Visual Studio Code, Node.js, Figma, Excel, RStudio, Jupyter Notebook, and Photoshop. In addition, Christine has a keen eye for design and experience in web development, marketing, and warehouse operations through their various roles as a Web Developer/Designer, Marketing Director, and Warehouse Associate. Overall, Christine's diverse skill set, adaptability, and self-motivation makes them a valuable asset to any team. Currently, they are looking for challenges to <i>stack</i> on new skills and <i>push</i> their limits. 
<br></br><br></br>Also, they have a <b>STRONG</b> interest in animal-shaped pots! They are not a good gardener, but they can bake some mad cookies.
                </StyledPopup>
              </AdjustBioWrap>
            </AdjustBioContainer>
            <EducationWrap>
              <Education>EDUCATION</Education>
              <EducationDate><b>2021-2025</b></EducationDate>
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
