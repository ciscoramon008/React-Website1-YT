import React from 'react'
import { InfoContaier, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,
  TopLine, Heading, Subtitle, BtnWrapper, ImgWrap, Img } from './InfoElements'

import { Button } from '../ButtonElement'

const Info = ({ id, bgLight, imgStart, topLine, headLine,
  lightText, description, darkText, buttonLabel, img, alt,
  primary, dark }) => {
  
  return (
    <InfoContaier id={id} bgLight={bgLight}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrapper>
                <Button to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >{buttonLabel}</Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContaier>
  )
}

export default Info