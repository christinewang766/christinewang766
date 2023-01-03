import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import TurnipsImg from './youFoundMe.png'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialMediaWrap, Message, WebsiteRights, YouFoundMeWrap, Turnips, SpeechBubble, Speech, PhotoAlbum, SpeechWrap, Grid
 } from './FooterElements'

const Footer = () => {

    return (
        <FooterContainer id="contact">
            <Grid>
            <YouFoundMeWrap >
                    <Turnips src={TurnipsImg} alt="turnips" />
                    <SpeechWrap>
                    <SpeechBubble>
                    <Speech >You found me!</Speech>
                    </SpeechBubble>
                    <SpeechBubble>
                    <Speech>I like going on<p></p>adventures...</Speech>
                    </SpeechBubble>
                    <SpeechBubble>
                        <PhotoAlbum to="/turnips">♡ Album ♡</PhotoAlbum>
                    </SpeechBubble>
                    </SpeechWrap>
            </YouFoundMeWrap>
            <FooterWrap>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="//instagram.com/christinewang766/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="//www.linkedin.com/in/christine-wang-b690a818a/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="mailto:christinewang766@gmail.com?subject = Feedback&body = Message" target="_blank" aria-label="Email">
                            <AiOutlineMail color="white" />
                        </SocialIconLink>
                        <SocialIconLink href="//github.com/christinewang766" target="_blank" aria-label="GitHub">
                            <AiFillGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
                <Message to="/message">Message Me</Message>
                <WebsiteRights>Christine Wang © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            </FooterWrap>
            </Grid>
        </FooterContainer>
    )
}

export default Footer
