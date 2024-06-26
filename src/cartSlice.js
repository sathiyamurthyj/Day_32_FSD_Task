import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./data";




const cartSlice = createSlice({
    name:"cart",
    initialState: cartItems,
    reducers:{
        removeFromCart: (state, action) => {
            const isItemInCart = state.find((cartItem) => cartItem.id === action.payload);
            if(isItemInCart) {
                return state.filter((cartItem) => cartItem.id !== action.payload);
            }  
        },
        updateItemQuantity:(state,action) => {
            const isItemInCart = state.find((cartItem) => cartItem.id === action.payload.id);
            if(isItemInCart) {
                return state.map((cartItem) => cartItem.id === action.payload.id?{...cartItem,quantity:action.payload.quantity}: cartItem);
            }
        },
    }
});


export const {removeFromCart, updateItemQuantity} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;



