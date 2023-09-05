import { configureStore} from "@reduxjs/toolkit";
import cartsReducer from  '../feature/cart/cartsSlice'
import cardReducer from "../feature/card/cardSlice";

export const  store = configureStore({
    reducer:{
        cart: cartsReducer, 
        card: cardReducer
        
    },

})