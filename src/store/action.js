import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userType: null,
  appearance: 'light'
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
  },
});

export const { 
  setToken, 
  setUser,
  setAppearance
} = tokenSlice.actions;

export default tokenSlice.reducer;
