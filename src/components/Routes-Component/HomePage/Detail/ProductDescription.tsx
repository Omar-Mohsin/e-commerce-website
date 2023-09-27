import React from "react";
import { styled } from "styled-components";
import { addItem } from "../../../../feature/cart/cartsSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../../Types/Types";

function ProductDescription({ matchedProduct }: any) {
  const dispatch = useDispatch();

  const AddToCartHandler = (matchedProduct: Product) => {
    dispatch(addItem(matchedProduct));
  };
  return (
    <>
      <Title>{matchedProduct.title}</Title>
      <Descirption>{matchedProduct.description}</Descirption>
      <Price>${matchedProduct.price}</Price>
      <AddToCartButton onClick={() => AddToCartHandler(matchedProduct)}>
        ADD TO CART
      </AddToCartButton>
    </>
  );
}

export default ProductDescription;

const Title = styled.h4`
  font-size: 24px;
  color: #176b87; /* Orange color for title */
  margin-bottom: 10px;
`;

const Descirption = styled.p`
  font-size: 18px;
  color: #666;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 24px;
  color: #ff5733; /* Teal color for price */
  margin-top: 30px;
`;

const AddToCartButton = styled.button`
  background-color: #176b87; /* Orange color for button */
  color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  margin-top: 30px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fff; /* Lighter orange on hover */
    color: #000;
  }
`;
