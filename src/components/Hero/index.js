import React from 'react'
import { HeroContainer, HeroContent, HeroItems, HeroBtn, HeroH1, HeroP } from './HeroElements';

const Hero = () => {
    return (
        <div>
            <HeroContainer>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Pizza Ever</HeroH1>
                        <HeroP>Ready in 2 minutes</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default Hero;
