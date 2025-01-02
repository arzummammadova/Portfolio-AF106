import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingProduct = state.value.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.value.push({ ...action.payload, count: 1 });
      }
    },
    removeFromBasket: (state, action) => {
      state.value = state.value.filter(product => product.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const existingProduct = state.value.find(product => product.id === id);
      if (existingProduct) {
        existingProduct.count = Math.max(1, existingProduct.count + amount); // Prevent negative quantities
      }
    },
    removeAllBasket: (state) => {
      state.value = [];
    },
  },
});

export const { addToBasket, removeFromBasket, updateQuantity, removeAllBasket } = basketSlice.actions;

export default basketSlice.reducer;
