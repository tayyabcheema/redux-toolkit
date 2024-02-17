import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = new createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // This is the core redux method
      state.push(action.payload);
    },
    remove(state, action) {
      // returning the new state
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions; // Note: It should be 'actions' instead of 'action'

export default cartSlice.reducer;
