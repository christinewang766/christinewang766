import React from 'react'
import { Container, ButtonWrap, BackButton, ProjectWrap, HeaderWrap, Hearts, Hearts2, Project1Wrap, Header, Title1, Title2, GridWrap, TextBoxWrap, TextWrap, GitWrap, GitLink, Topic, Description, ListItem, DemoVid, DemoWrap, VidWrap, HomeImg } from './ProjectsElements'
import CuteVideo from './media/cuteDemo.MP4'
import ScrollToTop from '../../components/ScrollToTop'
import { useNavigate } from 'react-router-dom'


const Projects = () => {
    let navigate = useNavigate();

    return (
        <>
            <ScrollToTop />
            <Container>
                <ProjectWrap>
                    <HeaderWrap>
                        <ButtonWrap>
                            <BackButton onClick={() => navigate(-1)}>GO BACK</BackButton>
                        </ButtonWrap>
                        <Header>Projects</Header>
                    </HeaderWrap>
                    <Project1Wrap>
                        <GridWrap>
                            <TextBoxWrap>
                                <Hearts />
                                <TextWrap>
                                    <Title1>Christine's Portfolio</Title1>
                                    <GitWrap>
                                        <Topic>Github:</Topic>
                                        <GitLink href="https://github.com/christinewang766/portfolio/" target="_blank">github.com/christinewang766/portfolio</GitLink>
                                    </GitWrap>
                                    <Topic>Language(s): JavaScript, CSS, HTML</Topic>
                                    <Topic>Status: Incomplete</Topic>
                                    <Description>
                                        <ListItem>Created responsive and fuctional user interfaces that is compatible for all devices and screens.</ListItem>
                                        <ListItem>Designed website with modern JavaScript frameworks like React, HTML5, and CSS3. </ListItem>
                                        <ListItem>Conceptualized and designed front-end to be maximalist, memorable, and effective in portraying my experience.</ListItem>
                                        <ListItem>Used Photoshop to enhance user experience and engagement through colourful visuals.</ListItem>
                                        <ListItem>Implemented React Router DOM and React Scroll for easy and accessible user navigation.</ListItem>
                                    </Description>
                                </TextWrap>
                            </TextBoxWrap>
                            <DemoWrap>
                                <VidWrap>
                                    <HomeImg />
                                </VidWrap>
                            </DemoWrap>
                        </GridWrap>
                    </Project1Wrap>
                    <Hearts2 />

                    <Project1Wrap>
                        <GridWrap>
                            <TextBoxWrap>
                                <Hearts />
                                <TextWrap>
                                    <Title2>Cutesy Cards</Title2>
                                    <GitWrap>
                                        <Topic>Github:</Topic>
                                        <GitLink href="https://github.com/christinewang766/CuteFlashCards/" target="_blank">github.com/christinewang766/CuteFlashCards</GitLink>
                                    </GitWrap>
                                    <Topic>Language: Java</Topic>
                                    <Topic>Status: Incomplete</Topic>
                                    <Description>
                                        <ListItem><i>idea behind the project:</i><p></p>students tend to study more effectively when their notes "look nice"; with customizable flashcards in 3 different themes to choose from, students can work hard and focus better</ListItem>
                                        <ListItem>Developed an interactive App where users can create, view, edit, star, save, and load flashcards into a deck and practice material for memorization.</ListItem>
                                        <ListItem>Utilized the Java Swing library and coded the app with model-view-controller architecture.</ListItem>
                                    </Description>
                                </TextWrap>
                            </TextBoxWrap>
                            <DemoWrap>
                                <VidWrap>
                                    <DemoVid controls="controls" preload="metadata" src={CuteVideo} type='video/mp4'></DemoVid>
                                </VidWrap>
                            </DemoWrap>
                        </GridWrap>
                    </Project1Wrap>
                    <Hearts2 />

                </ProjectWrap>
            </Container>
        </>
    )
}

export default Projects
