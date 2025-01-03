import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  users: [],
}
const baseUrl='http://localhost:3000/users'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios(baseUrl)
    return response.data
  },
)
export const sortNameAZ = createAsyncThunk(
  'users/sortName',
  async () => {
    const response = await axios(baseUrl)
  const sortedUser = response.data.sort((a, b) => a.firstName.localeCompare(b.firstName));
    return sortedUser;
   

  },
)
export const sortNamebyZA = createAsyncThunk(
  'users/sortNamebyZA',
  async () => {
   const response=await axios(baseUrl);
   const sortedProduct=response.data.sort((a,b)=>b.firstName.localeCompare(a.firstName))
   return sortedProduct

  },
)
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
   
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users=action.payload
    })
    builder.addCase( sortNameAZ .fulfilled, (state, action) => {
      state.users=action.payload
    })
    builder.addCase(sortNamebyZA.fulfilled,(state,action)=>{
      state.users=action.payload
    })
  },

})


export default userSlice.reducer