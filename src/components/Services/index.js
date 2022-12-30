import React from 'react'
import Icon1 from './images/1.png'
import Icon2 from './images/2.png'
import Icon3 from './images/3.png'

import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <>
      <ServicesContainer id="projects">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
        <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduc ur fees</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>Access Platform online</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
