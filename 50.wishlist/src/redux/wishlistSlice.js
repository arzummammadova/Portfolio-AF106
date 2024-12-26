import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3000/wishlist'

export const addWishList = createAsyncThunk('wishlist/addWishList', async (item,id) => {
  const response = await axios.post(baseUrl, item)
  const findishavproduct=response.data.find((product)=>product.id==item.id)
  if (findishavproduct){
    return null
  }
  else{
      const addresponse=await axios(baseUrl,item)

      return (
        addresponse.data)
  }
 
})
export const removefromWishlist=createAsyncThunk('wishlist/removefromWishlist',async(id)=>{
      await axios.delete(`${baseUrl}/${id}`)
})


// export const deleteall = createAsyncThunk('wishlist/deleteall', async () => {
//   await axios.delete(baseUrl);
//   return [];
// });
export const deleteall = createAsyncThunk("wishlist/resetWishlistAsync", async () => {
  const response = await axios.get(baseUrl)
  const allProducts = response.data


  await Promise.all(
    allProducts.map((product) => axios.delete(`${baseUrl}/${product.id}`))
  )

  return [] 
})

export const getWistListProducts=createAsyncThunk('wishlist/getWistListProducts',async()=>{
  const response=await axios (baseUrl)
  return(response.data)
  

  
})




const initialState = {
  value: [],
}

const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: { deleteall: (state) => {
    state.value = [];
  },},
  extraReducers: (builder) => {
    builder .addCase(addWishList.fulfilled, (state, action) => { state.value.push(action.payload); })

    builder.addCase(getWistListProducts.fulfilled, (state, action) => { state.value = action.payload; })
    builder.addCase(removefromWishlist.fulfilled, (state, action) => { state.value = state.value.filter((item) => item.id !== action.meta.arg); });
    // builder.addCase(deleteall.fulfilled, (state, action) => {
    //   state.value = action.payload;
    // });
    
  }
})

export default wishSlice.reducer
