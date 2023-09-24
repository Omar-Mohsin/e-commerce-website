import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addItem, SelectAllCart } from '../../feature/cart/cartsSlice';
import { SelectAllProducts, fetchProducts } from '../../feature/product/productSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { styled } from 'styled-components';
import { ThunkDispatch } from 'redux-thunk';
import Item from './Item';
interface Products {
  id: number;
  image: string;
  title: string;
  price: number;
}

function Products(): JSX.Element {
  const dispatch: ThunkDispatch<RTCStatsType, unknown, AnyAction> = useDispatch();
  const Products = useSelector(SelectAllProducts);
  const cart = useSelector(SelectAllCart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container className="fade-in">
      {Products ? (
        Products.map((product: Products) => (
          <Item product ={product}></Item>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default Products;

const Container = styled.div`
  background-color: #f7f7f7;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 100%;
  padding: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;
