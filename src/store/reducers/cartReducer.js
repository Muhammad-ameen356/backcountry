import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const fakeApi = "http://localhost:3000";

const postCart = createAsyncThunk("cart/postCart", async (data) => {
  const response = await axios.post(`${fakeApi}/cart`, data);
  return response;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postCart.pending, (state, action) => {})
      .addCase(postCart.fulfilled, (state, action) => {})
      .addCase(postCart.rejected, (state, action) => {});
  },
});
// each case under reducers becomes an action
export const {} = cartSlice.actions;
export default cartSlice.reducer;
