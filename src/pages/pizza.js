import React from 'react';
import styled, { css } from 'styled-components';
import Img1 from '../img/pizza3.jpg';
import { ProductDataThree } from '../components/Products/data';
import { FaHandsWash, FaCheckDouble } from 'react-icons/fa';
import { GiFireplace } from 'react-icons/gi';
import { BiFoodTag } from 'react-icons/bi';

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
    border: 1px solid white;
    box-shadow:8px 8px #fdc500;
    margin-bottom: 2rem;
    flex-direction:row;

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
    position: relative;
    padding: 1rem 1rem;
`;
const ProductBtns=styled.div`
    display: flex;
    padding: 1rem;
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    justify-content: space-between;
    @media screen and (max-width: 780px) {
        position: relative;
  }
`;
const ProductTitle=styled.h2`
    font-size: clamp(2rem, 2.5vw, 3rem);
`;
const ProductInfo=styled.p`
    font-size: 1.25rem;
    margin-bottom: 1rem;
`;
const ProductFeatures=styled.div`
    font-family: sans-serif;
    font-style: italic;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;
const margins=css`
    margin-right: 10px;
`;
const Hand=styled(FaHandsWash)`
    font-size: 1.5rem;
    ${margins}
`;
const Fireplace=styled(GiFireplace)`
    font-size: 1.5rem;
    ${margins}
`;
const Double=styled(FaCheckDouble)`
    font-size: 1.5rem;
    ${margins}
    color: white;
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
                {
                    ProductDataThree.map((pizza,index)=>(
                        <ProductCard style={{flexDirection:index%2===0?'row':'row-reverse'}} >
                            <ProductImg src={pizza.img} alt={pizza.alt} />
                            <ProductDesc>
                                <ProductTitle>{pizza.name}</ProductTitle>
                                <ProductInfo> {pizza.desc}
                                </ProductInfo>
                                <ProductFeatures>
                                    <Hand/> Hand Tossed &nbsp;&nbsp; <Fireplace/> Fire Baked &nbsp;&nbsp; <Double/> 2x Toppings
                                </ProductFeatures>
                                <ProductBtns>
                                    <ProductPrice>{pizza.price}</ProductPrice>
                                    <ProductBtn>{pizza.button}</ProductBtn>
                                </ProductBtns>
                            </ProductDesc>
                        </ProductCard>
                    ))
                }
            </ProductsContainer>
       </>
    )
}
export default Pizzas
