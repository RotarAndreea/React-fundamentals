import React from 'react'
import { BackgroundTitle, HeroBg, HeroContainer, HeroContent, Image, Title, TitleContent, MiniIndex,
FooterContainer,FooterColumn1,FooterColumn2 } from './HeroSectionElements'
import Icon from "../../images/profile-picture.png"
import './Home.css'

const HeroSection = () => {
  return (
    <>
        <HeroContainer> 
            <>
                <HeroBg>
                <Image src={Icon} />
                </HeroBg>
            </>
            <HeroContent>
                <TitleContent>
                    <MiniIndex>01</MiniIndex>
                    <Title>Rotar Andreea</Title>
                </TitleContent>
                <BackgroundTitle>Rotar Andreea</BackgroundTitle>

                
            </HeroContent>

            <FooterContainer>
              <FooterColumn1/>
              <FooterColumn2/>  

            </FooterContainer>
           
            
         </HeroContainer>
        
    </>
  )
}

export default HeroSection