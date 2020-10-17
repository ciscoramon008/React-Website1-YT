import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarItem, SidebarLink } from './SidebarElements'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <SidebarContainer isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to='about'>About</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to='discover'>Discover</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to='services'>Services</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to='signup'>Sign Up</SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar