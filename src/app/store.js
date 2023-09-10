import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from '../feature/cart/cartsSlice';
import productReducer from "../feature/product/productSlice";



export const store = configureStore({
  reducer: {
    cart: cartsReducer,
    product: productReducer,
  },
});  