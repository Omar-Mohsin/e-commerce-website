import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SelectId } from "../../../feature/auth/authSlice";
import { getUserCart } from "../../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import OrderedProduct from "./OrderedProduct";
import OrderedProductSummary from "./OrderedProductSummary";
function Order() {
  const userId = useSelector(SelectId);
  const [cart, setCart] = useState([]);


  const fetchUserCart = async () => {
    try {
      const userCart = await getUserCart(userId);
      setCart(userCart);
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };
  useEffect(() => {
    if (userId) {
      fetchUserCart();
    }
  }, []);

  const calculateOrderSummary = (order) => {
    const subtotal = order.products.reduce((total, product) => {
      return total + product.price;
    }, 0);

    const tax = subtotal * 0.05;
    const grandTotal = subtotal + tax;

    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      grandTotal: grandTotal.toFixed(2),
    };
  };

  return (
    <Container>
      <Header>
        <h1>Your Order History</h1>
      </Header>
      {cart.map((item, index) => {
        const orderSummary = calculateOrderSummary(item);
        return (
          <OrderItem key={index}>
            <OrderTimestamp>
              {format(
                new Date(item.timestamp.seconds * 1000),
                "MMMM dd, yyyy HH:mm:ss"
              )}
            </OrderTimestamp>
            <CartItems>
              {item.products
                .reduce((uniqueProducts, product) => {
                  const existingProduct = uniqueProducts.find(
                    (p) => p.id === product.id
                  );

                  if (!existingProduct) {
                    uniqueProducts.push({ ...product, quantity: 1 });
                  } else {
                    existingProduct.quantity += 1;
                  }

                  return uniqueProducts;
                }, [])
                .map((uniqueProduct) => (
                  <OrderedProduct product={uniqueProduct} />
                ))}
            </CartItems>
            <OrderSummary>
              <OrderedProductSummary orderSummary={orderSummary} />
            </OrderSummary>
          </OrderItem>
        );
      })}
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

const Header = styled.div`
  margin-top: 30px;
  background-color: #f7f7f7;
`;

const OrderSummary = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
  text-align: left;
`;
