import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axiosInstance.get(
      // "/products/categories/bc-mens-shirts"
      // "/products/search/car?q="
      "/products/search/null?q="
    );
    // console.log(response, "res");
    return response;
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (search) => {
    const response = await axiosInstance.get(`/products/search/${search}?q=`);
    console.log(response);
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productLoading: false,
    products: [],
    // searchProducts: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.productLoading = true;
        toast.info("Loading...");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productLoading = false;
        state.products = action.payload.data.products;
        toast.dismiss();
        toast.success("Successfully fetched Products");
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.postLoading = false;
      })
      .addCase(searchProducts.pending, (state, action) => {
        state.productLoading = true;
        toast.info("Loading...");
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.productLoading = false;
        state.products = action.payload.data.products;
        toast.dismiss();
        toast.success("Successfully Search Products");
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.postLoading = false;
      });
  },
});
// each case under reduaccers becomes an action
export const {} = productsSlice.actions;
export default productsSlice.reducer;
