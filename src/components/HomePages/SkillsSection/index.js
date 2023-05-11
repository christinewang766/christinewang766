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
                <SkillsIcon data-aos="fade-up" src={Languages} />
                <SkillsH2>Languages</SkillsH2>
                <SkillsPWrap>
                <SkillsP>Java, C++, C, CSS3, HTML5, JavaScript, TypeScript, R, Racket</SkillsP>
                </SkillsPWrap>
            </SkillsCard>
            <SkillsCard>
                <SkillsIcon data-aos="fade-up" src={Library} />
                <SkillsH2>Libraries</SkillsH2>
                <SkillsPWrap>
                <SkillsP>Java Swing, React (styled-components, Router, Tailwind)</SkillsP>
                </SkillsPWrap>
            </SkillsCard>
            <SkillsCard>
                <SkillsIcon data-aos="fade-up" src={DevTool} />
                <SkillsH2>Developement Tools</SkillsH2>
                <SkillsPWrap>
                <SkillsP> Git/GitHub, Visual Studio Code, Node.js, Figma, Excel, RStudio, Jupyter Notebook, Photoshop</SkillsP>
                </SkillsPWrap>
            </SkillsCard>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  )
}

export default Skills
