import React from 'react'
import { ServicesContainer, ServicesHeader, ServicesBody, ServicesCard,
ServicesIcon, ServicesCardHeader, ServicesCardText } from './ServicesElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesHeader>Our Services</ServicesHeader>
      <ServicesBody>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesCardHeader>Service 1</ServicesCardHeader>
          <ServicesCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt
          </ServicesCardText>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesCardHeader>Service 2</ServicesCardHeader>
          <ServicesCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt
          </ServicesCardText>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesCardHeader>Service 3</ServicesCardHeader>
          <ServicesCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt
          </ServicesCardText>
        </ServicesCard>
      </ServicesBody>
    </ServicesContainer>
  )
}

export default Services