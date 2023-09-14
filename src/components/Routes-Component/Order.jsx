import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SelectAllCart } from '../../feature/cart/cartsSlice';
import { SelectId } from '../../feature/auth/authSlice';
import { getUserCart } from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { format } from 'date-fns'; 

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
  }, [userId]);

  return (
    <Container>
      <Header>
        <h1>Your Order History</h1>
      </Header>
      {cart.map((item, index) => (
        <OrderItem key={index}>
          <OrderTimestamp>
            {format(new Date(item.timestamp.seconds * 1000), 'MMMM dd, yyyy HH:mm:ss')}
          </OrderTimestamp>
          <CartItems>
            {item.products.reduce((uniqueProducts, product) => {
              const existingProduct = uniqueProducts.find(p => p.id === product.id);

              if (!existingProduct) {
                uniqueProducts.push({ ...product, quantity: 1 });
              } else {
                existingProduct.quantity += 1;
              }

              return uniqueProducts;
            }, []).map((uniqueProduct, productIndex) => (
              <StyledCartItem key={productIndex}>
                <ItemImage src={uniqueProduct.image} alt={uniqueProduct.title} />
                <ItemDetails>
                  <ItemTitle>{uniqueProduct.title}</ItemTitle>
                  <ItemDescription>{uniqueProduct.description}</ItemDescription>
                  <ItemPrice>${uniqueProduct.price}</ItemPrice>
                  <ItemQuantity>Quantity: {uniqueProduct.quantity}</ItemQuantity>
                </ItemDetails>
              </StyledCartItem>
            ))}
          </CartItems>
        </OrderItem>
      ))}
    </Container>
  );
}

export default Order;

const Container = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const OrderItem = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
`;

const OrderTimestamp = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

const CartItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

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

const Header = styled.div`
  margin-top: 30px;
  background-color: #f7f7f7;

`;

const ItemQuantity = styled.p`
  color: #444;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

// Add more styling as needed
