import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    user : null,
    status  : false,
}
export const authSlice = createSlice({
name : "auth" , 
initialState , 
reducers :{

    setUser: {
    reducer (state, action){
        state.user = action.payload;
        state.status  = true;
    }},
    signOut: {
        reducer (state , action){
            state.user = action.payload;
            state.status  = false;
        }},

}, 
extraReducers : {},


})



export const SelectStatus =(state)=>{
    return state.auth.status;

}
export const SelectUser =(state)=>{
    return state.auth.user;

}

export const authReducer = authSlice.reducer;

export const {setUser , signOut} = authSlice.actions;