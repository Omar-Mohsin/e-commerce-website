import React from "react";
import { useSelector } from "react-redux";
import { SelectAllCart } from "../../../feature/cart/cartsSlice";
import "./cart.scss";
import { SelectId, SelectUser } from "../../../feature/auth/authSlice";
import "../../animation.scss";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { updateCart } from "../../../utils/firebase/firebase.utils";
import CartProduct from "./CartProduct";
import CartPageTitle from "./CartPageTitle";
import { Product } from "../../Types/Types";
function Cart(): JSX.Element {
  const cart = useSelector(SelectAllCart);
  const user = useSelector(SelectUser);
  const userId = useSelector(SelectId);
  console.log(userId);
  const filteredCart = cart.filter(
    (item: Product, index: number) => cart.indexOf(item) === index
  );

  const checkoutHandler = () => {
    updateCart(userId, cart);
  };

  const totalPrice = (product: Product) => {
    const newArray = cart.filter((item: Product) => item.id === product.id);
    const ArrayLength = newArray.length;
    const total = ArrayLength * product.price;
    return total;
  };

  const subtotal = Math.round(
    filteredCart.reduce((acc: number, product: Product) => {
      return acc + totalPrice(product);
    }, 0)
  );

  const taxRate = 0.06;
  const tax = Math.round(subtotal * taxRate);
  const grandTotal = Math.round(subtotal + tax);

  return (
    <>
      {cart.length > 0 ? (
        <div className="product">
          <CartPageTitle />
          {filteredCart?.map((product: Product) => {
            return <CartProduct product={product} total={totalPrice} />;
          })}
          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">
                {subtotal}
              </div>
            </div>
            <div className="totals-item">
              <label>Tax (5%)</label>
              <div className="totals-value" id="cart-tax">
                {tax}
              </div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">
                15.00
              </div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">
                {grandTotal}
              </div>
            </div>
          </div>

          {user ? (
            <Link to="/orders">
              <button className="checkout" onClick={checkoutHandler}>
                Checkout
              </button>
            </Link>
          ) : (
            <Link to="/signIn">
              <button className="signIn">Sign in</button>
            </Link>
          )}
        </div>
      ) : (
        <CartEmpty>
          <h4>cart is empty</h4>
        </CartEmpty>
      )}
    </>
  );
}

export default Cart;

const CartEmpty = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: center;
  align-items: center h4 {
    font-size: 100px;
    font-family: "Dancing Script", cursive;
  }
`;
