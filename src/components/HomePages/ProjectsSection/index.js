import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { ProjectsContainer, ProjectsWrapper, Header, ProjectsCard, Title, Description, DescriptionWrap, ReadMore, ImgWrap1, ImgWrap2 } from './ProjectsElements'

const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, [])


  return (
    <>
      <ProjectsContainer id="projects">
        <Header data-aos="fade-up">Projects</Header>
        <ProjectsWrapper>

        <ProjectsCard>
          <ImgWrap1>
            <DescriptionWrap>
              <Description>A website to experiment with design and represent who I am as a (prospective) computer scientist. Serves as a visual resume.</Description>
            <ReadMore>Read More</ReadMore>
            </DescriptionWrap>
          </ImgWrap1>
          <Title>Portfolio Website</Title>
          </ProjectsCard>
          
          <ProjectsCard>
          <ImgWrap2>
            <DescriptionWrap>
              <Description>A Java-based flashcard application to help students study. The user can create, save, and edit card decks as well as study in a cute UI.</Description>
            <ReadMore>Read More</ReadMore>
            </DescriptionWrap>
          </ImgWrap2>
          <Title>Cutesy Cards</Title>
          </ProjectsCard>
         
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  )
}

export default Projects
