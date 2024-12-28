import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const basketSlice = createSlice({
  name: "basket",
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
    
    plusBtn: (state, action) => {
      const existingProduct = state.value.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.count += 1;
      }
    },

    minusBtn: (state, action) => {
      const existingProduct = state.value.find(item => item.id === action.payload.id);
      if (existingProduct && existingProduct.count > 0) {
        existingProduct.count -= 1;
      }
    }
  },
});

export const { addToBasket, plusBtn, minusBtn } = basketSlice.actions;
export default basketSlice.reducer;
