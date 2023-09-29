import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const Products_URL = 'https://fakestoreapi.com/products';

const initialState = {
  product: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get(Products_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
})

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading'
        state.error = null;

      }).addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      }).addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})
export const { reducer: productReducer } = productSlice;


export const SelectAllProducts = (state) => {
  return state.product.product
}
export default productSlice.reducer;

