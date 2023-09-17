import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { addItem, SelectAllCart } from '../../feature/cart/cartsSlice';
import { SelectAllProducts, fetchProducts } from '../../feature/product/productSlice';
import { Link } from 'react-router-dom';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

function Product(): JSX.Element {
  const dispatch: ThunkDispatch<RTCStatsType, unknown, AnyAction> = useDispatch();
  const Products = useSelector(SelectAllProducts);
  const cart = useSelector(SelectAllCart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addOnCart = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <Container className="fade-in">
      {Products ? (
        Products.map((product: Product) => (
          <CardItem key={product.id} data-test-id="product">
              <ImageContainer>
                <img src={product.image} alt={product.title} />
              </ImageContainer>
           
            {cart.filter((item: Product) => item.id === product.id).length > 0 && (
              <CartItemCount>
                {cart.filter((item: Product) => item.id === product.id).length}
              </CartItemCount>
            )}
            <ProductTitle>{product.title}</ProductTitle>
            <Price>${product.price}</Price>
            <Buttons>
            <AddToCartButton onClick={() => addOnCart(product)}>ADD TO CART</AddToCartButton>

            <Link to={`/Detile/${product?.id}`} style={{ textDecoration: 'none', color: 'black'}}>
            <MoreInfo >MORE INFO</MoreInfo>

            </Link>
            </Buttons>
          </CardItem>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: #f7f7f7;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 100%;
  padding: 20px;
  justify-content: center;
`;

const CardItem = styled.div`

  position: relative;
  width: calc(33.33% - 20px);
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 140px;
  height: 140px;
  margin-bottom: 10px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const CartItemCount = styled.p`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #64ccc5;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 1.2rem;
`;

const Price = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
  padding: 8px 16px;
  color: #ff5733;
  border-radius: 10px;
`;

const AddToCartButton = styled.button`
  cursor: pointer;
  background-color: #176b87;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  transition: background-color 0.2s ease-in-out;
  margin-right : 10px;

  &:hover {
    color : black;
    background-color: white;
  }
`;
const Buttons  = styled.div`
  margin-top : 20px;
  display : flex; 
`
const MoreInfo = styled.button`
  cursor: pointer;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  transition: background-color 0.2s ease-in-out;
  margin-right : 10px;

  &:hover {
    color : white;
    background-color: #64ccc5;
  }

`

const ProductTitle = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 10px 0;
  color: #053b50;
`;
