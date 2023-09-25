import React from "react";
import styled from "styled-components";

function OrderedProduct({ product }: any) {
  return (
    <StyledCartItem key={product.id}>
      <ItemImage src={product.image} alt={product.title} />
      <ItemDetails>
        <ItemTitle>{product.title}</ItemTitle>
        <ItemDescription>{product.description}</ItemDescription>
        <ItemPrice>${product.price}</ItemPrice>
        <ItemQuantity>Quantity: {product.quantity}</ItemQuantity>
      </ItemDetails>
    </StyledCartItem>
  );
}

export default OrderedProduct;

const StyledCartItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: 200px;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  margin-top: 10px;
`;

const ItemTitle = styled.h3`
  color: #333;
  font-size: 18px;
  margin: 0;
`;

const ItemDescription = styled.p`
  color: #666;
  font-size: 14px;
  margin-top: 5px;
`;

const ItemPrice = styled.p`
  color: #ff5733;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const ItemQuantity = styled.p`
  color: #444;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;
