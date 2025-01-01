import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlicer';
import wishlistReducer from '../features/wishlistSlicer.js';

export const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: wishlistReducer, 
  },
});
