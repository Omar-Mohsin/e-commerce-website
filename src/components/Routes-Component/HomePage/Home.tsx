import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../../Types/Types";
import {
  SelectAllProducts,
  fetchProducts,
} from "../../../feature/product/productSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { styled } from "styled-components";
import { ThunkDispatch } from "redux-thunk";

import Item from  './Product-Component/Item'
function Home(): JSX.Element {
  const dispatch: ThunkDispatch<RTCStatsType, unknown, AnyAction> =
    useDispatch();
  const Products = useSelector(SelectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container className="fade-in">
      {Products ? (
        Products.map((product: Product) => <Item product={product}></Item>)
      ) : (
        <Loading>Loading...</Loading>
      )}
    </Container>
  );
}

export default Home;

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

const Loading = styled.p`
  
  margin-top  :100px;
`
