import React, { useState } from 'react'
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import { HeroContainer, HeroContent, HeroItems, HeroBtn, HeroH1, HeroP } from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <HeroContainer>
                <Navbar toggle={toggle}/>
                <SideBar isOpen={isOpen} toggle={toggle}/>
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
