import React, { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

import {
  SkillsContainer,
  SkillsWrapper,
  Title,
  SkillsCard,
  Category,
  Details,
} from "./SkillsElements";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const skillsData: { title: string; details: string; src: string }[] = [
    {
      title: "Languages",
      details: "TypeScript, JavaScript, Java, C++, C, CSS3, HTML5, R, Racket",
      src: "https://s12.gifyu.com/images/SQG41.png",
    },
    {
      title: "Libraries",
      details: "React, Redux, CSS (Tailwind, styled-components), Java Swing",
      src: "https://s11.gifyu.com/images/SQG4D.png",
    },
    {
      title: "Development Tools",
      details:
        "Git/GitHub, Visual Studio Code, Node.js, Next.js, Figma, Photoshop, Excel, RStudio",
      src: "https://s11.gifyu.com/images/SQG4o.png",
    },
  ];

  return (
    <>
      <SkillsContainer id="skills">
        <Title data-aos="fade-up">Skills</Title>
        <SkillsWrapper>
          {skillsData.map((props, i) => {
            return (
              <SkillsCard key={i}>
                <img
                  data-aos="fade-up"
                  src={props.src}
                  style={{
                    height: "160px",
                    width: "auto",
                    maxWidth: "100%",
                    marginBottom: "10px",
                  }}
                />
                <Category>{props.title}</Category>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "160px",
                  }}
                >
                  <Details>{props.details}</Details>
                </div>
              </SkillsCard>
            );
          })}
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
