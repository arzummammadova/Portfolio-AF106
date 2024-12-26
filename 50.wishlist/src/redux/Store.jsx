// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice'; 
import todosReducer from './TodoSlice'; 
import wishlist from './wishlistSlice'
export const store = configureStore({
  reducer: {
    products: productReducer, 
    todos: todosReducer, 
    wishlist: wishlist,
  },
  
});

export default store;
