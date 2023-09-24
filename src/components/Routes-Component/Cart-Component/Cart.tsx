import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../feature/cart/cartsSlice";
import { SelectAllCart } from "../../../feature/cart/cartsSlice";
import "./cart.scss";
import { SelectId, SelectUser } from "../../../feature/auth/authSlice";
import "../../animation.scss";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { updateCart } from "../../../utils/firebase/firebase.utils";

function Cart(): JSX.Element {
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
  }

  const carts = useSelector(SelectAllCart);
  const user = useSelector(SelectUser);
  const userId = useSelector(SelectId);
  console.log(userId);
  const dispatch = useDispatch();
  const filteredCarts = carts.filter(
    (item: Product, index: number) => carts.indexOf(item) === index
  );

  const onClickHandler = () => {
    updateCart(userId, carts);
  };

  const totalPrice = (product: Product) => {
    const newArray = carts.filter((item: Product) => item.id === product.id);
    const ArrayLength = newArray.length;
    const total = ArrayLength * product.price;
    return total;
  };

  const subtotal = Math.round(
    filteredCarts.reduce((acc: number, product: Product) => {
      return acc + totalPrice(product);
    }, 0)
  );

  const taxRate = 0.05; // 5% tax rate
  const tax = Math.round(subtotal * taxRate);
  const grandTotal = Math.round(subtotal + tax);

  const onRemoveClick = (productId: number) => {
    dispatch(removeItem(productId));
  };

  const minOnClick = (productId: number) => {
    dispatch(removeItem(productId));
  };

  const plusOnClick = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      {carts.length > 0 ? (
        <div className="product">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>

          {filteredCarts.map((product: Product) => {
            return (
              <div className="product" key={product.id}>
                <div className="shopping-cart fade-left">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-details">
                    <div className="product-title">{product.title}</div>
                    <p className="product-description">{product.description}</p>
                  </div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-quantity">
                    <button
                      className="Counter"
                      onClick={() => minOnClick(product.id)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={
                        carts.filter((item: Product) => item.id === product.id)
                          .length
                      }
                    />
                    <button
                      className="Counter"
                      onClick={() => plusOnClick(product)}
                    >
                      +
                    </button>
                  </div>
                  <div className="product-removal">
                    <button
                      className="remove-product"
                      onClick={() => onRemoveClick(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="product-line-price">
                    {Math.round(totalPrice(product))}
                  </div>
                </div>
              </div>
            );
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
              <button className="checkout" onClick={onClickHandler}>
                Checkout
              </button>
            </Link>
          ) : (
            <Link to="/signIn">
              <button className="checkout">Checkout</button>
            </Link>
          )}
        </div>
      ) : (
        <CartEmpty>
          <h4>carts is empty</h4>
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
const SignIn = styled.h4`
  text-align: center;
  margin-top: 50px;
`;
