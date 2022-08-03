import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterReducer";
import productsSlice from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productsSlice,
  }, //add reducers here
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
