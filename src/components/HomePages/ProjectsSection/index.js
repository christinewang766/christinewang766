import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { ProjectsContainer, ProjectsWrapper, Header, ProjectsCard, Title, Description, DescriptionWrap, ReadMore, ImgWrap1, ImgWrap2, ImgWrap3, ImgWrap4 } from './ProjectsElements'
import ScrollToTop from '../../ScrollToTop'

const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, [])


  return (
    <>
    <ScrollToTop />
      <ProjectsContainer id="projects">
        <Header data-aos="fade-up">Projects</Header>
        <ProjectsWrapper>
          
        <ProjectsCard data-aos="fade-up">
          <ImgWrap4>
            <DescriptionWrap>
              <Description>A modern palette generator for every artist's needs. Login and register, run from dogs and be creative. Your palettes will always be there when you come back.</Description>
            <ReadMore to="/projects">Read More</ReadMore>
            </DescriptionWrap>
          </ImgWrap4>
          <Title to="/projects">Colour Love</Title>
          </ProjectsCard>

        <ProjectsCard data-aos="fade-up">
          <ImgWrap3>
            <DescriptionWrap>
              <Description>A rustic website where you can create, personalize, and send heartfelt postcards. View the messages you receive, and keep a time capsule of memories.</Description>
            <ReadMore to="/projects">Read More</ReadMore>
            </DescriptionWrap>
          </ImgWrap3>
          <Title to="/projects">Post-That</Title>
          </ProjectsCard>

        <ProjectsCard data-aos="fade-up">
          <ImgWrap1>
            <DescriptionWrap>
              <Description>A website to experiment with design and represent who I am as a (prospective) computer scientist. Serves as a visual resume.</Description>
            <ReadMore to="/projects">Read More</ReadMore>
            </DescriptionWrap>
          </ImgWrap1>
          <Title to="/projects">Portfolio Website</Title>
          </ProjectsCard>
          
          <ProjectsCard data-aos="fade-up">
          <ImgWrap2>
            <DescriptionWrap>
              <Description>A Java-based flashcard application to help students study. The user can create, save, and edit card decks as well as study in a cute UI.</Description>
            <ReadMore to="/projects">Read More</ReadMore>
            </DescriptionWrap>
          </ImgWrap2>
          <Title to="/projects">Cutesy Cards</Title>
          </ProjectsCard>
         
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  )
}

export default Projects
