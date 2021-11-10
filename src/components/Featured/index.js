import React from 'react'
import {FeatureContainer, FeaturedButton,} from './FeaturedElements';
const Featured = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle Alfredo Sauce topped with 24 carat Gold</p>
            <FeaturedButton>
                Order Now
            </FeaturedButton>
        </FeatureContainer>
    )
}

export default Featured
