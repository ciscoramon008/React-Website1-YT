import React from 'react'
// import Video from '../../videos/video.mp4'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, 
  HeroP, HeroBtnWrapper, Button } from './HeroElements'

const HeroComp = () => {
  return (
    <HeroContainer>
      {/* <HeroBg><VideoBg autoPlay loop muted src={Video} type='video/mp4' /></HeroBg> */}
      <HeroContent>
        <HeroH1>Just Some Text To Show</HeroH1>
        <HeroP>
          I love to code.
          I love React.
          I love how powerful React is and I probably wanna do this for a living.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup'>Get Started</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroComp