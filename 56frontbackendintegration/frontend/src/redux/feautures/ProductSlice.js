import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  const response = await axios.get('http://localhost:5000/api/products');
  return response.data;
});

export const deleteProducts = createAsyncThunk('product/deleteProducts', async (id) => {
  await axios.delete(`http://localhost:5000/api/products/${id}`);
  return id;
});

export const addProducts = createAsyncThunk('product/addProducts', async (newProduct) => {
  const response = await axios.post('http://localhost:5000/api/products', newProduct);
  return response.data;
});

export const updateProducts = createAsyncThunk('product/updateProducts', async (updatedProduct) => {
  const response = await axios.put(
    `http://localhost:5000/api/products/${updatedProduct._id}`,
    updatedProduct
  );
  return response.data;
});

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product._id !== action.payload);
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      });
  },
});

export default ProductSlice.reducer;
