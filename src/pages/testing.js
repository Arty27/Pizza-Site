import React from 'react';
import styled from 'styled-components';
import Img1 from '../img/pizza3.jpg';
import { ProductData } from '../components/Products/data';
import {
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductBtn, ViewMoreBtn  } from '../components/Products/ProductElements';
const HeroWrapper=styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${Img1});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
`;
const HeroTitle=styled.h1`
    color: white;
    font-size: clamp(4rem, 3vw, 6rem);
`;
const ProductsContainer=styled.div`
    padding: 5rem calc((100vw - 1350px) /2);
    background: #150f0f;
    color:#fff;
    align-items: center;
`;

const Pizzas = () => {
    return (
       <>
            <HeroWrapper>
            <HeroTitle>
                Pizzas
            </HeroTitle>
            </HeroWrapper>
            <ProductsContainer>
                <ProductWrapper>
                    {
                        ProductData.map((product,index)=>{
                            return(
                                <ProductCard key={index}>
                                    <ProductImg src={product.img} alt={product.alt}/>
                                    <ProductInfo>
                                        <ProductTitle>{product.name}</ProductTitle>
                                        <ProductDesc>{product.desc}</ProductDesc>
                                        <ProductPrice>{product.price}</ProductPrice>
                                        <ProductBtn>{product.button}</ProductBtn>
                                    </ProductInfo>
                                </ProductCard>
                            )
                        })
                    }
                </ProductWrapper>
            </ProductsContainer>
       </>
    )
}
export default Pizzas
