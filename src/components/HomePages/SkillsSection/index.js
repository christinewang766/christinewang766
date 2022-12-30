import React, {useEffect} from 'react'
import Languages from './images/languages.png'
import Library from './images/library.png'
import DevTool from './images/devTool.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { SkillsContainer, SkillsWrapper, SkillsH1, SkillsCard, SkillsIcon, SkillsH2, SkillsP, SkillsPWrap } from './SkillsElements'

const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once:true });
  }, [])


  return (
    <>
      <SkillsContainer id="skills">
        <SkillsH1 data-aos="fade-up">Skills</SkillsH1>
        <SkillsWrapper>
        <SkillsCard>
                <SkillsIcon src={Languages} />
                <SkillsH2>Languages</SkillsH2>
                <SkillsPWrap>
                <SkillsP> Java, Racket, C++, CSS, HTML, JavaScript</SkillsP>
                </SkillsPWrap>
            </SkillsCard>
            <SkillsCard>
                <SkillsIcon src={Library} />
                <SkillsH2>Libraries</SkillsH2>
                <SkillsPWrap>
                <SkillsP>Java Swing, React (styled-components, bootstrap, Router, aos)</SkillsP>
                </SkillsPWrap>
            </SkillsCard>
            <SkillsCard>
                <SkillsIcon src={DevTool} />
                <SkillsH2>Developement Tools</SkillsH2>
                <SkillsPWrap>
                <SkillsP> Intellij Idea, DrRacket, Git, Photoshop, Microsoft Office, Google Workspace, Overleaf, Visual Studio Code</SkillsP>
                </SkillsPWrap>
            </SkillsCard>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  )
}

export default Skills
