import React from 'react'
import { ProductsContainer,
        ProductsHeading,
        ProductWrapper,
        ProductCard,
        ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductBtn, ViewMoreBtn  } from './ProductElements';
const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {
                    data.map((product,index)=>{
                        return(
                            <ProductCard key={index}>
                                <ProductImg src={product.img} alt={product.alt}/>
                                <ProductInfo>
                                    <ProductTitle>{product.name}</ProductTitle>
                                    <ProductDesc>{product.desc.length>76?product.desc.substring(0,73)+"...":product.desc}</ProductDesc>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductBtn>{product.button}</ProductBtn>
                                </ProductInfo>
                            </ProductCard>
                        )
                    })
                }
            </ProductWrapper>
            <ViewMoreBtn to='/pizzas'>View More...</ViewMoreBtn>
        </ProductsContainer>
    )
}

export default Products
