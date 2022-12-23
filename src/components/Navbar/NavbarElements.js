import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import navbarBackground from "C:/Users/chris/tofu-cafe/src/images/navbarBackground.png";

export const Nav = styled.nav`
background: url(${navbarBackground});
height: 80px;
// margin-top: -80px;
display: flex; // child elements automatically align w/ auto width/height
justify-content: center;
align-items: center;
font-family:'Kano';
font-size: 1.5rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
color: #44624a;
justify-self: flex-start;
justify-content: left;
cursor: pointer;
font-size: 1.2rem;
display: flex;
align-items: center;
font-family:'Dantina';
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #44624a;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 800px) {
    display: none;
}
`
export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #44624a;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

// when you hover over nav link, it underlines
&.active {
    border-bottom: 3px solid #01bf71;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 800px){
    display: none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #8ba888;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
font-weight: bold;
letter-spacing: 2px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background #f1ebe1;
    color: #010606;
}
`