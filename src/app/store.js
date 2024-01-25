import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../features/cart/cartSlice";
import productsReducers from "../features/products/productsSlice";

export default configureStore({
  reducer: {
    products:productsReducers,
    cart:cartReducers
  },
});
