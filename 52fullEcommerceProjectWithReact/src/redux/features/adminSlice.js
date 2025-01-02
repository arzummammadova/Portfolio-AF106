import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  product: [],
}

const baseUrl='http://localhost:3000/products'

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async () => {
    const response = await axios (baseUrl)
    return response.data
  },
)
export const adminSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.product=action.payload
    })
  },
})


export default adminSlice.reducer