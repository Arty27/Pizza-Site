import React from 'react';
import styled from 'styled-components';
import Img1 from '../img/pizza3.jpg';
import Img2 from '../img/pizza2.jpg';
import { ProductData } from '../components/Products/data';

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
    padding: 5rem calc((100vw - 1200px) /2);
    background: #150f0f;
    color:#fff;
    align-items: center;
    @media screen and (max-width: 1200px) {
        padding: 5rem 3rem;
  }
`;
const ProductCard=styled.div`
    display: flex;
    flex-direction: row-reverse;
    box-shadow:8px 8px #fdc500;
    @media screen and (max-width: 780px) {
        flex-direction: column;
  }
`;
const ProductImg=styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    object-fit: cover;
`;
const ProductDesc=styled.div`
    width: 100%;
    padding: 1rem 1rem;
`;
const ProductTitle=styled.h2`
    font-size: clamp(2rem, 2.5vw, 3rem);
`;
const ProductInfo=styled.p`
    font-size: 1.25rem;
    margin-bottom: 1rem;
`;
const ProductBtns=styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductPrice=styled.p`
    font-size: 2rem;
`;
const ProductBtn=styled.button`
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-in-out;
    &:hover{
        background: #ffc500;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        color: #fff;
    }
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
                <ProductCard>
                    <ProductImg src={Img2} />
                    <ProductDesc>
                        <ProductTitle>Supreme Pizza</ProductTitle>
                        <ProductInfo> White pizza with garlic infused olive oil, goat cheese, fresh mozzarella fior di latte,
                                    prosciutto fired off then topped with arugula and shaved parmesan. </ProductInfo>
                        <ProductBtns>
                            <ProductPrice>$19.9</ProductPrice>
                            <ProductBtn>Add to Cart</ProductBtn>
                        </ProductBtns>
                    </ProductDesc>
                </ProductCard>
            </ProductsContainer>
       </>
    )
}
export default Pizzas
