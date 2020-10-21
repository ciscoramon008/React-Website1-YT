import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarItem, SidebarLink } from './SidebarElements'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <SidebarContainer isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)}>
      <Icon onClick={() => setIsSidebarOpen(false)}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to='about' onClick={() => setIsSidebarOpen(false)}>About</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to='discover' onClick={() => setIsSidebarOpen(false)}>Discover</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to='services' onClick={() => setIsSidebarOpen(false)}>Services</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to='signup' onClick={() => setIsSidebarOpen(false)}>Sign Up</SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar