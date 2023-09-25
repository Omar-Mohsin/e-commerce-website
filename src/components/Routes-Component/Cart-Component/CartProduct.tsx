import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SelectAllCart,
  removeItem,
  addItem,
} from "../../../feature/cart/cartsSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

function CartProduct({ product, total }: any) {
  const cart = useSelector(SelectAllCart);
  const dispatch = useDispatch();

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
          <button className="Counter" onClick={() => minOnClick(product.id)}>
            -
          </button>
          <input
            type="text"
            value={
              cart.filter((item: Product) => item.id === product.id).length
            }
          />
          <button className="Counter" onClick={() => plusOnClick(product)}>
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
        <div className="product-line-price">{Math.round(total(product))}</div>
      </div>
    </div>
  );
}

export default CartProduct;
