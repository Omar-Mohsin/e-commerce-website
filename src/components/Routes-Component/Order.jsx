import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SelectAllCart } from '../../feature/cart/cartsSlice';
import { SelectId } from '../../feature/auth/authSlice';
import { getUserCart } from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';

function Order() {
  const userId = useSelector(SelectId);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const userCart = await getUserCart(userId);
        setCart(userCart);
      } catch (error) {
        console.error('Error fetching user cart:', error);
      }
    };

    if (userId) {
      fetchUserCart();
    }
  }, []);

  return (
    <Container>
      <Header>
      <h1 >Your order</h1>
      </Header>
      <CartItems>
        {cart.map((item) => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.title} />
            <ItemDetails>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
              <ItemPrice>${item.price}</ItemPrice>
            </ItemDetails>
          </CartItem>
        ))}
      </CartItems>
    </Container>
  );
}

export default Order;

const Container = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const CartItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top :  100px;
  gap: 20px;
`;

const CartItem = styled.div`
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
  height: 300px;
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

const Header = styled.div`

margin-top : 100px;

`