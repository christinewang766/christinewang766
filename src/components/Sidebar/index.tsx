import React from 'react'
import { SidebarContainer, Icon, SidebarLink, SidebarRoute } from './SidebarElements'
import { FaTimes } from 'react-icons/fa'


const Sidebar = (props: { isOpen: boolean, toggle: () => void }) => {
  
  return (
    <SidebarContainer style={{opacity: props.isOpen ? '100%' : '0'}}>
      <Icon onClick={props.toggle}>
        <FaTimes style={{color: '#44624a'}} />
      </Icon>
      <div style={{color:'#8ba888'}}>
        <ul style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
        <SidebarLink to="about" onClick={props.toggle}>About</SidebarLink>
        <SidebarLink to="work" onClick={props.toggle}>Work</SidebarLink>
        <SidebarLink to="projects" onClick={props.toggle}>Projects</SidebarLink>
        <SidebarLink to="contact" onClick={props.toggle}>Contact</SidebarLink>
        </ul>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <SidebarRoute to="/message" />
        </div>
      </div>
    </SidebarContainer>
    
  )
}

export default Sidebar