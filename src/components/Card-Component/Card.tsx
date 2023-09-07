import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { fetchCards, SelectAllCard } from '../../feature/card/cardSlice';
import { addItem, SelectAllCart } from '../../feature/cart/cartsSlice';
import { Link } from 'react-router-dom';
import { AnyAction } from '@reduxjs/toolkit';

import { ThunkDispatch } from 'redux-thunk';



interface Product {
  id : number , 
  image : string,
  title :  string, 
  price :  number 
}

function Card(): JSX.Element {
  const dispatch: ThunkDispatch<RTCStatsType, unknown, AnyAction> = useDispatch();
  const cards = useSelector(SelectAllCard);
  const cart = useSelector(SelectAllCart);
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const addOnCart = (card: Product) => {
    dispatch(addItem(card));
  };

  return (
    <Container className="fade-in">
      {cards.map((card :Product) => (
        <CardItem key={card.id}>
          <Link to={`/Detile/${card?.id}`}>
            <ImageContainer>
              <img src={card.image} alt={card.title} />
            </ImageContainer>
          </Link>
          {cart.filter((item :Product) => item.id === card.id).length > 0 && (
            <CartItemCount>
              {cart.filter((item:Product) => item.id === card.id).length}
            </CartItemCount>
          )}
          <h5>{card.title}</h5>
          <Price>${card.price}</Price>
          <AddToCartButton onClick={() => addOnCart(card)}>
            Add to Cart
          </AddToCartButton>
        </CardItem>
      ))}
    </Container>
  );
}

export default Card;

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
  border-radius: 25px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h5 {
    font-size: 1.4rem;
    margin: 10px 0;
    color: #053b50;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
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
  font-size: 1.2rem;
  text-align: center;
  margin: 10px;
  padding: 5px 10px;
  background-color: #64ccc5;
  color: white;
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
`;

const Price = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
  padding: 8px 16px;
  color: #ff5733;
  border-radius: 25px;
`;

const AddToCartButton = styled.button`
  cursor: pointer;
  background-color: #176b87;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
