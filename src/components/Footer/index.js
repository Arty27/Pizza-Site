import React from 'react'
import { FooterContainer, FooterWrap, SocialMediaWrap, SocialMedia, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink to="/" target="_blank" aira-label="Facebook" rel="noopener nonreferrer"><FaFacebook/></SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aira-label="Instagram" rel="noopener nonreferrer"><FaInstagram/></SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aira-label="Youtube" rel="noopener nonreferrer"><FaYoutube/></SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aira-label="Twitter" rel="noopener nonreferrer"><FaTwitter/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
