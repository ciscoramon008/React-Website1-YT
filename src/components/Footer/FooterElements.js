import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.footer`
  background: #101522;
`

export const Wrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const LinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    justify-content: space-between;
  }
`
export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const LinksHeader = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

export const LinkItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`

export const SocialMedia = styled.div`
  color: #fff;
  text-align: center;
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const SocialMediaLogo = styled.h1`
  margin-bottom: 16px;
`

export const Rights = styled.p`
  margin-bottom: 16px;
`
export const MediaMenu = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MediaItem = styled.a`
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
`