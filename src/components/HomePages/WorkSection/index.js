import { useState, useEffect } from "react";
import Paperclip from './paperclip.png'
import AOS from 'aos'
import { BlockTabs, ContentTabs, Content1, Content2, Content3, TitleJob, WorkWrapper, WorkContainer, Heading, TextWrapper, Button1, Button2, Button3, Divider, Img, ImgWrap, Location, TitleWrap, DescriptionWrap, Description, ListItem, Date } from "./WorkElements";

function Work() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once:true });
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
          <Button2 isTwoSelected={(toggleState === 2)} onClick={() => toggleTab(2)}>Amazon</Button2>
          <Divider />
          <Button3 isThreeSelected={(toggleState === 3)} onClick={() => toggleTab(3)}>Tutor</Button3>
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
              <div style={{ borderTop: "2px solid #000", marginLeft: 5, marginRight: 5 }} />
              <Date>2022-present</Date>
              <DescriptionWrap>
                <Description>
                  <ListItem>Coffee - A brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant</ListItem>
                  <ListItem>Tea - An aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub (bush) native to Asia</ListItem>
                  <ListItem>Coca Cola - A carbonated soft drink produced by The Coca-Cola Company. The drink's name refers to two of its original ingredients, which were kola nuts (a source of caffeine) and coca leaves</ListItem>
                </Description>
              </DescriptionWrap>
            </Content1>

            <Content2 isTwoSelected={(toggleState === 2)}>
              <TitleWrap>
                <TitleJob>Warehouse Worker</TitleJob>
                <Location>@ Amazon</Location>
              </TitleWrap>
              <div style={{ borderTop: "2px solid #000", marginLeft: 5, marginRight: 5 }} />
              <Date>August 2021 - September 2022</Date>
              <DescriptionWrap>
                <Description>
                  <ListItem>Occasionally responsible for ”Problem Solving” and ”Gatekeeping” roles that place astrong emphasis on computer literacy and analytical decision-making.</ListItem>
                  <ListItem>Safely and efficiently operate warehouse material handling equipment in a fast-paced environment to meet company production goals.</ListItem>
                  <ListItem>Consistently had the highest rate of my department while prioritizing safety and teamwork.</ListItem>
                </Description>
              </DescriptionWrap>
            </Content2>

            <Content3 isThreeSelected={(toggleState === 3)}>
              <TitleWrap>
                <TitleJob>Private Math / Chemistry Tutor</TitleJob>
              </TitleWrap>
              <div style={{ borderTop: "2px solid #000", marginLeft: 5, marginRight: 5 }} />
              <Date>2022-current</Date>
              <DescriptionWrap>
                <Description>
                  <ListItem>Taught high school level Chemistry and Mathematics in a flexible and approachable manner.</ListItem>
                  <ListItem>Monitored students’ educational progress through regular face-to-face and email check-ups, ensuring that all work is completed and corrected.</ListItem>
                  <ListItem>Displayed critical thinking and time-management skills by creating successful studying strategies and individualized practice questions. This motivated and provided further insight to students.</ListItem>
                  <ListItem>Improved students’ grades on tests up to 20%.</ListItem>
                </Description>
              </DescriptionWrap>
            </Content3>
          </ContentTabs>
        </WorkWrapper>
      </WorkContainer>
    </>
  );
}

export default Work;