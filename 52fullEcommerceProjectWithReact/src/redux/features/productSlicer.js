import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = "http://localhost:3000/products";

const initialState = { 
  products: [],
  filteredProducts: [],
};

export const setProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

export const sortProductByAZ = createAsyncThunk("product/sortByAZ", async () => {
  const response = await axios.get(baseUrl);
  return response.data.slice().sort((a, b) => a.title.localeCompare(b.title));
});

export const sortProductByZA = createAsyncThunk("product/sortByZA", async () => {
  const response = await axios.get(baseUrl);
  return response.data.slice().sort((a, b) => b.title.localeCompare(a.title));
});

export const sortProductByLowToHigh = createAsyncThunk("product/sortByLowToHigh", async () => {
  const response = await axios.get(baseUrl);
  return response.data.slice().sort((a, b) => a.price - b.price);
});

export const sortProductByHighToLow = createAsyncThunk("product/sortByHighToLow", async () => {
  const response = await axios.get(baseUrl);
  return response.data.slice().sort((a, b) => b.price - a.price);
});

export const searchProducts = createAsyncThunk("product/searchProducts", async (searchTerm) => {
  const response = await axios.get(baseUrl);
  const filtered = response.data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filtered;
});

export const sortByCategory = createAsyncThunk("product/sortByCategory", async (category) => {
  const response = await axios.get(baseUrl);
  const filtered = response.data.filter(product => product.category === category);
  return filtered; 
});

export const deleteproduct = createAsyncThunk(
  'product/deleteproduct',
  async (id) => {
    // id düzgün göndərilir
    await axios.delete(`http://localhost:3000/products/${id}`);
    return id;  // ID-ni geri qaytarırıq ki, bunu reducer-da istifadə edək
  }
);







const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(sortProductByAZ.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(sortProductByZA.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(sortProductByLowToHigh.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(sortProductByHighToLow.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.filteredProducts = action.payload;
      })
      .addCase(sortByCategory.fulfilled, (state, action) => {
        state.filteredProducts = action.payload; 
      })

      .addCase(deleteproduct.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
        state.filteredProducts = state.products;  // Filterlənmiş siyahını da yeniləmiş oluruq
      });
      
      



         
     ;
      
      
      
  },
});

export default productSlice.reducer;
