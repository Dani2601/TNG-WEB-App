import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  appearance: 'light',
  cart: []
};

export const tokenSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAppearance: (state, action) => {
      state.appearance = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { 
  setToken, 
  setUser,
  setAppearance,
  setCart
} = tokenSlice.actions;

export default tokenSlice.reducer;
