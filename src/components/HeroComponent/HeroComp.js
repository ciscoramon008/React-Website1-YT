import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, 
  HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroComp = () => {
  const [onHover, setOnHover] = useState(false);

  const toggleHover = () => setOnHover(!onHover)

  return (
    <HeroContainer>
      <HeroBg><VideoBg autoPlay loop muted src={Video} type='video/mp4' /></HeroBg>
      <HeroContent>
        <HeroH1>Just Some Text To Show</HeroH1>
        <HeroP>
          I love to code.
          I love React.
          I love how powerful React is and I probably wanna do this for a living.
        </HeroP>
        <HeroBtnWrapper>
          <Button primary dark to='signup' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            Get Started {onHover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroComp