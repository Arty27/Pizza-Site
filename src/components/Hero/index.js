import React from 'react'
import { HeroContainer, HeroContent, HeroItems, HeroBtn, HeroH1, HeroP } from './HeroElements';
import  AutoTyping, { BlinkCursor } from 'react-auto-typing'
import { css } from 'styled-components';
const styles=css`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3;
`;
const Hero = () => {
    return (
        <div>
            <HeroContainer>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>
                            G
                        <AutoTyping
                        active // <boolean>
                        textRef='reatest Pizza Ever'// <string>
                        writeSpeed={450} // <number>
                        deleteSpeed={150} // <number>
                        delayToWrite={1000} // <number>
                        delayToDelete={2000} // <number>
                        /></HeroH1>
                        <HeroP>Ready in 10 minutes</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default Hero;
