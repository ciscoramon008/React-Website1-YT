import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Container, Wrapper, LinksContainer, LinksColumn,
  LinksHeader, LinkWrapper, LinkItem, SocialMedia, SocialMediaWrapper,
  SocialMediaLogo, Rights, MediaMenu, MediaItem } from './FooterElements'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LinksContainer>
          <LinkWrapper>
            <LinksColumn>
              <LinksHeader>About Us</LinksHeader>
              <LinkItem to='/'>How it works?</LinkItem>
              <LinkItem to='/'>Testimonials</LinkItem>
              <LinkItem to='/'>Careers</LinkItem>
              <LinkItem to='/'>Investors</LinkItem>
              <LinkItem to='/'>Terms of Service</LinkItem>
            </LinksColumn>
            <LinksColumn>
              <LinksHeader>Contact Us</LinksHeader>
              <LinkItem to='/'>Contact</LinkItem>
              <LinkItem to='/'>Support</LinkItem>
              <LinkItem to='/'>Destinations</LinkItem>
              <LinkItem to='/'>Sponsorships</LinkItem>
            </LinksColumn>
          </LinkWrapper>
          <LinkWrapper>
            <LinksColumn>
              <LinksHeader>Videos</LinksHeader>
              <LinkItem to='/'>Submit Video</LinkItem>
              <LinkItem to='/'>Ambassadors</LinkItem>
              <LinkItem to='/'>Agency</LinkItem>
              <LinkItem to='/'>Influencer</LinkItem>
            </LinksColumn>
            <LinksColumn>
              <LinksHeader>Social Media</LinksHeader>
              <LinkItem to='/'>Instagram</LinkItem>
              <LinkItem to='/'>Facebook</LinkItem>
              <LinkItem to='/'>Youtube</LinkItem>
              <LinkItem to='/'>Twitter</LinkItem>
            </LinksColumn>
          </LinkWrapper>
        </LinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialMediaLogo>Company</SocialMediaLogo>
            <Rights>Company &copy; {new Date().getFullYear()} All rights reserved.</Rights>
            <MediaMenu>
              <MediaItem href='https://www.facebook.com' target='_blank' aria-label='facebook'><FaFacebook /></MediaItem>
              <MediaItem href='https://www.instagram.com' target='_blank' aria-label='instagram'><FaInstagram /></MediaItem>
              <MediaItem href='https://www.youtube.com' target='_blank' aria-label='youtube'><FaYoutube /></MediaItem>
              <MediaItem href='https://www.twitter.com' target='_blank' aria-label='twitter'><FaTwitter /></MediaItem>
            </MediaMenu>
          </SocialMediaWrapper>
        </SocialMedia>
      </Wrapper>
    </Container>
  )
}

export default Footer