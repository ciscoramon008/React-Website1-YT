import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  outline: none;
  display: flex;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
  border-radius: 50px;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  background-color: ${({primary}) => (primary ? '#01bf71' : '#010606')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({primary}) => (primary ? '#fff' : '#01bf71')};
  }
`