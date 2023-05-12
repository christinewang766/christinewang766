import { useState, useEffect } from "react";
import Paperclip from './paperclip.png'
import AOS from 'aos'
import { BlockTabs, ContentTabs, Line, Content1, Content2, Content3, Content4, TitleJob, WorkWrapper, WorkContainer, Heading, TextWrapper, Button1, Button2, Button3, Button4, Divider, Img, ImgWrap, Location, TitleWrap, DescriptionWrap, Description, ListItem, Date } from "./WorkElements";

function Work() {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, [])

  return (
    <>
      <WorkContainer id="work">
        <TextWrapper>
          <Heading data-aos="fade-up">Work</Heading>
        </TextWrapper>

        <BlockTabs>
          <Button1 isOneSelected={(toggleState === 1)} onClick={() => toggleTab(1)}>Music Unbounded</Button1>
          <Divider />
          <Button2 isTwoSelected={(toggleState === 2)} onClick={() => toggleTab(2)}>Dollar Project</Button2>
          <Divider />
          <Button3 isThreeSelected={(toggleState === 3)} onClick={() => toggleTab(3)}>Amazon</Button3>
          <Divider />
          <Button4 isFourSelected={(toggleState === 4)} onClick={() => toggleTab(4)}>Tutor</Button4>
        </BlockTabs>

        <WorkWrapper>
          <ImgWrap>
            <Img src={Paperclip} />
          </ImgWrap>
          <ContentTabs>
            <Content1 isOneSelected={(toggleState === 1)}>
              <TitleWrap>
                <TitleJob>Web Developer / Designer</TitleJob>
                <Location>@ Music Unbounded</Location>
              </TitleWrap>
              <Line />
              <Date>November 2022 - present</Date>
              <DescriptionWrap>
                <Description>
                  <ListItem>Implemented a React application to create a visually appealing and modern home page that improved the user experience for clients interacting with the organization.</ListItem>
                  <ListItem>Collaborated with a team of developers and designers to build a website that was accessible and responsive across various devices and user groups, using TypeScript and CSS.</ListItem>
                  <ListItem>Designed high-fidelity prototypes for the website using a variety of tools, including Wix, Figma, Canva, and Photoshop, to ensure that the final product meets user needs.</ListItem>
                </Description>
              </DescriptionWrap>
            </Content1>

            <Content2 isTwoSelected={(toggleState === 2)}>
              <TitleWrap>
                <TitleJob>Marketing Director</TitleJob>
                <Location>@ The UBC Dollar Project</Location>
              </TitleWrap>
              <Line />
              <Date>August 2021 - present</Date>
              <DescriptionWrap>
                <Description>
                  <ListItem>Developed and executed successful marketing campaigns on social media platforms including Instagram, resulting in increased public engagement and boosted sales.</ListItem>
                  <ListItem>Oversaw recruitment and training of marketing associates, providing guidance and leading team meetings to ensure successful execution of marketing strategies.</ListItem>
                  <ListItem>Amplified organization's web presence by driving engagement with 190% more Instagram accounts that were not previously following the organization within a 90-day period.</ListItem>
                </Description>
              </DescriptionWrap>
            </Content2>

            <Content3 isThreeSelected={(toggleState === 3)}>
              <TitleWrap>
                <TitleJob>Warehouse Worker</TitleJob>
                <Location>@ Amazon</Location>
              </TitleWrap>
              <Line />
              <Date>August 2021 - September 2022</Date>
              <DescriptionWrap>
                <Description>
                  <ListItem>Demonstrated strong problem-solving and analytical decision-making skills in roles such as "Problem Solving" and "Gatekeeping," which required proficiency in computer literacy.</ListItem>
                  <ListItem>Operated warehouse material handling equipment safely and efficiently in a fast-paced environment to meet company production goals.</ListItem>
                  <ListItem>Achieved the highest rate in my department consistently while prioritizing safety and fostering a spirit of teamwork.</ListItem>
                </Description>
              </DescriptionWrap>
            </Content3>

            <Content4 isFourSelected={(toggleState === 4)}>
              <TitleWrap>
                <TitleJob>Private / Peer Tutor</TitleJob>
              </TitleWrap>
              <Line />
              <Date>April 2019 − April 2020</Date>
              <DescriptionWrap>
                <Description>
                  <ListItem>Taught high school level Chemistry and Mathematics in a flexible and approachable manner, fostering a positive learning environment.</ListItem>
                  <ListItem>Monitored students' educational progress through regular face-to-face and email check-ups, ensuring that all work was completed and corrected in a timely manner.</ListItem>
                  <ListItem>Developed and implemented individualized study plans that resulted in an average grade improvement of 15% on tests, contributing to the overall academic success of students.</ListItem>
                </Description>
              </DescriptionWrap>
            </Content4>
          </ContentTabs>
        </WorkWrapper>
      </WorkContainer>
    </>
  );
}

export default Work;