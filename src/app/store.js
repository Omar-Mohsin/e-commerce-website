import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartsReducer from '../feature/cart/cartsSlice';
import productReducer from "../feature/product/productSlice";
import authReducer  from "../feature/auth/authSlice";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducers  = combineReducers({
  cart: cartsReducer,
  product: productReducer,
  auth : authReducer,

})
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};
const persistedReducer = persistReducer(persistConfig, rootReducers);


export const store = configureStore({
  reducer:persistedReducer,

});


export const persistor = persistStore(store);
