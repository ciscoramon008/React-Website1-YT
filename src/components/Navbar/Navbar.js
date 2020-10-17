import React from 'react'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, 
  NavBtnLink } from './NavElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>Company</NavLogo>
          <MobileIcon onClick={() => setIsSidebarOpen(true)}><FaBars color='white' size='2rem' /></MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='discover'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup'>Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/login'>Login</NavBtnLink>
            </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar