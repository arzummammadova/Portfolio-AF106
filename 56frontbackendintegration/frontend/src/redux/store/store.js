import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../feautures/ProductSlice.js'
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
export default store;