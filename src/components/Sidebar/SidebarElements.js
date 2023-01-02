import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import pochita from "./images/pochita.png";
import closedLetter from "./images/closedLetter.png";
import openLetter from "./images/openLetter.png";

export const SidebarContainer = styled.aside`
position: fixed;
font-family:'Lato';
z-index: 999;
background: URL(${pochita});
background-repeat: no-repeat;
backgroundSize: cover;
background-position: center;
width: 100%;
height: 100%;
display: grid;
align-items: center;
top:0;
left:0;

opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: #44624a;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
// cursor: pointer;
outline:none;
`
export const SidebarWrapper = styled.div`
color: #8ba888;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 80px);
text-align: center;

@media screen and (max-width: 480px) {
grid-template-rows: repeat(5, 60px);
}
`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #44624a;
// cursor: pointer;

&:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
}
`
export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
color: #fff;
position: absolute;
top: 30rem;
background: URL(${closedLetter});
background-repeat: no-repeat;
background-size: 140px 80px;
background-position: center;
white-space: nowrap;
padding: 70px 60px; 
outline: none;
border: none;
// cursor: pointer;
text-decoration: none;

&:hover {
    background: URL(${openLetter});
    background-repeat: no-repeat;
    background-size: 140px 100px;
    background-position: center;
    white-space: nowrap;
}
`