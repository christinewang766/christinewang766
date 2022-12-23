import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './NavbarElements'

const Navbar = () => {
  return (
    <>
  
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Christine Wang</NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
            <NavItem><NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem><NavLinks to="projects">Projects</NavLinks></NavItem>
                <NavItem><NavLinks to="work">Work</NavLinks></NavItem>
                <NavItem><NavLinks to="contact">Contact</NavLinks></NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/message">Message</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar
