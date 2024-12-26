// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice'; 
import todosReducer from './TodoSlice'; 

export const store = configureStore({
  reducer: {
    products: productReducer, 
    todos: todosReducer, 
  },
  
});

export default store;
