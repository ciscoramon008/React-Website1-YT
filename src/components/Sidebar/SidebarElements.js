import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  outline: none;
`

export const SidebarMenu = styled.ul`
  display: grid;
  color: #fff;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
`
export const SidebarItem = styled.li`
  text-align: center;
  padding: 2rem 0;
`
export const SidebarLink = styled(LinkS)`
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`

