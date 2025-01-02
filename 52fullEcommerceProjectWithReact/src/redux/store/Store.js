// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlicer.js';
import wishlistReducer from '../features/wishlistSlicer.js';
import basketReducer from '../features/basketSlice.js';  
import adminReducer from '../features/adminSlice.js'
export const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: wishlistReducer,
    basket: basketReducer, 
    admin:adminReducer,
  },
});
