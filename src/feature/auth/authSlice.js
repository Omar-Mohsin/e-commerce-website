import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    user : null,
    id : null,
    status  : false,
}
export const authSlice = createSlice({
name : "auth" , 
initialState , 
reducers :{

    setUser: {
    reducer (state, action){
        state.user = action.payload.displayName;
        state.status  = true;
        state.id = action.payload.uid;

    }},
    signOut: {
        reducer (state , action){
            state.user = action.payload;
            state.status  = false;
            state.id = action.payload

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
export const SelectId =(state)=>{
    return state.auth.id;

}

export const authReducer = authSlice.reducer;

export const {setUser , signOut} = authSlice.actions;