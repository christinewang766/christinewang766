import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
// @ts-ignore  
import TurnipsImg from "./youFoundMe.png";

import {
  FooterContainer,
  FooterWrap,
  SocialIcons,
  SocialMediaWrap,
  WebsiteRights,
  SpeechBubble,
  Speech,
  PhotoAlbum,
  SpeechWrap,
  Grid,
} from "./FooterElements";

const Footer = () => {

  function SingleSocialIcon(props: {
    ariaLabel: string;
    link: string;
    icon: IconType;
  }) {
    return (
      <a
        aria-label={props.ariaLabel}
        href={props.link}
        target="_blank"
        style={{ color: "white", fontSize: "24px" }}
      >
        <props.icon />
      </a>
    );
  }

  return (
    <FooterContainer id="contact">
      <Grid>
        {/** WRAP: you found me */}
        <div style={{ display: "flex", marginTop: "40px" }}>
          {/** TURNIPS */}
          <img
            style={{ width: "150px", height: "82%" }}
            src={TurnipsImg}
            alt="turnips"
          />
          <SpeechWrap>
            <SpeechBubble>
              <Speech>You found me!</Speech>
            </SpeechBubble>
            <SpeechBubble>
              <Speech>
                I like going on<p></p>adventures...
              </Speech>
            </SpeechBubble>
            <SpeechBubble>
              <PhotoAlbum to="/turnips">♡ Album ♡</PhotoAlbum>
            </SpeechBubble>
          </SpeechWrap>
        </div>
        <FooterWrap>
          <SocialMediaWrap>
            <SocialIcons>
              <SingleSocialIcon
                ariaLabel="Instagram"
                link="https://www.instagram.com/christinewang766/"
                icon={FaInstagram}
              />

              <SingleSocialIcon
                ariaLabel="LinkedIn"
                link="https://www.linkedin.com/in/christine-wang-b690a818a/"
                icon={FaLinkedin}
              />

              <SingleSocialIcon
                ariaLabel="Email"
                link="mailto:christinewang766@gmail.com?subject = Feedback&body = Message"
                icon={AiOutlineMail}
              />

              <SingleSocialIcon
                ariaLabel="GitHub"
                link="https://github.com/christinewang766"
                icon={AiFillGithub}
              />
            </SocialIcons>
          </SocialMediaWrap>

          <Link style={{color: 'white', fontFamily: 'Lato', paddingTop: '10px'}} to="/message">Message Me</Link>

          <WebsiteRights>
            Christine Wang © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
        </FooterWrap>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
