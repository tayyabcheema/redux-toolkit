import { createSlice } from "@reduxjs/toolkit";

// Making enums for the status as enums are not supported by deault in JS
// By freezing the object the user cannot change the status strings
export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = new createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
        state.status = action.payload;
      }
  },
});

export const { setProducts, setStatus } = productSlice.actions; 

export default productSlice.reducer;

// Thunk

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING))
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data))
      dispatch(setStatus(STATUS.IDLE))
    } catch (error) {
        console.log(error);
        dispatch(setStatus(STATUS.ERROR))
    }
  };
}
