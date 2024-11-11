import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import Paperclip from "./paperclip.png";
import WorkData from "./WorkData";

import {
  WorkWrapper,
  WorkContainer,
  Heading,
  Button,
  Divider,
  Img,
  DescriptionWrap,
  Description,
  ListItem,
  Date,
} from "./WorkElements";

function Work() {
  const [toggleState, setToggleState] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <WorkContainer id="work">
        <div style={{ maxWidth: "540px", paddingBottom: "10px" }}>
          <Heading data-aos="fade-up">Work</Heading>
        </div>

        <div style={{ bottom: "50px", right: "50px", display: "block" }}>
          {WorkData.map((props, i) => {
            return (
              <div key={i} style={{ display: "inline-block" }}>
                <Button
                  style={{
                    color: toggleState === i ? "#fff" : "	#000",
                    boxShadow:
                      toggleState === i
                        ? "10px 10px 0 #f1ebe1"
                        : "10px 10px 0 #aaaaaa",
                    background: toggleState === i ? "#44624a" : "	#f1ebe1",
                  }}
                  onClick={() => setToggleState(i)}
                >
                  {props.company}
                </Button>
                <Divider />
              </div>
            );
          })}
        </div>
        <WorkWrapper>
          <div style={{ position: "relative" }}>
            <Img src={Paperclip} />
          </div>
          <div style={{ flexGrow: "1" }}>
            {WorkData.map((props, i) => {
              return (
                <div
                  key={i}
                  style={{
                    padding: "20px",
                    width: "100%",
                    height: "100%",
                    display: toggleState === i ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h2
                      style={{
                        fontFamily: "Lato",
                        padding: "12px",
                        color: "#44624a",
                      }}
                    >
                      {props.position}
                    </h2>
                    <h4 style={{ fontFamily: "Lato", color: "#8ba888" }}>
                      @ {props.company}
                    </h4>
                  </div>
                  <div
                    style={{
                      borderTop: "2px solid #000",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                  <Date>{props.duration}</Date>
                  <DescriptionWrap>
                    <Description>
                      {props.l1 && <ListItem>{props.l1}</ListItem>}
                      {props.l2 && <ListItem>{props.l2}</ListItem>}
                      {props.l3 && <ListItem>{props.l3}</ListItem>}
                      {props.link && <ListItem>
                        <a href={props.link} target="_blank" style={{ fontFamily: "Lato", color: "#44624a" }}>Christine Wang's LinkedIn</a>
                      </ListItem>}
                    </Description>
                  </DescriptionWrap>
                </div>
              );
            })}
          </div>
        </WorkWrapper>
      </WorkContainer>
    </>
  );
}

export default Work;
