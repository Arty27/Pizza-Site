import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Featured from '../components/Featured';
import { ProductData,ProductDataTwo } from '../components/Products/data';
const Home = () => {
    return (
        <div>
             <Hero/>
            <Products heading="Choose Your Favorites" data={ProductData}/>
            <Featured/>
            <Products heading="Desserts" data={ProductDataTwo}/>
        </div>
    )
}

export default Home
