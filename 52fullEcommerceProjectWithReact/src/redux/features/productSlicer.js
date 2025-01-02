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
    await axios.delete(`http://localhost:3000/products/${id}`);
    return id; 
  }
);



export const addnewProduct= createAsyncThunk(
  'product/addNewProduct',
  async (newProduct) => {
    const response = await axios.post(`${baseUrl}`,newProduct)
   
    return response.data
  },
)
export const editProduct= createAsyncThunk(
  'product/editProduct',
  async (product) => {
    const response = await axios.put(`${baseUrl}/${product.id}`,product)
    return response.data
  },
)





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
        state.filteredProducts = state.products; 
      })

      .addCase(addnewProduct.fulfilled, (state, action) => {
      
        state.products.push(action.payload)
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.products = state.products.map((product) => 
          product.id === updatedProduct.id ? updatedProduct : product
        );
      });
      
      ;
      



         
     ;
      
      
      
  },
});

export default productSlice.reducer;
