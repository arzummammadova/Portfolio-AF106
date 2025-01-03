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
export const showAllAdmin= createAsyncThunk(
  'users/showAllAdmin',
  async () => {
   const response=await axios(baseUrl);
  const findAdmin=response.data.filter((user)=>user.isAdmin)
  return findAdmin

  },
)
export const deleteUser= createAsyncThunk(
  'users/deleteUser',
  async (id) => {
   const response=await axios.delete(`${baseUrl}/${id}`);
    return id;

  },
)

export const makeAdmin= createAsyncThunk(
  'users/deleteUser',
  async (id) => {
   const response=await axios.post(`${baseUrl}/${id}`);
  
   if(response.isAdmin){
    [...users],
    !isAdmin

   }
    return id;

  },
)
export const editUserInfo = createAsyncThunk(
  'users/editUserInfo',
  async (userData) => {
    const response = await axios.put(`${baseUrl}/${userData.id}`, userData); 
    return response.data; 
  }
);

export const searchUser = createAsyncThunk(
  'users/searchUser',
  async (searchTerm) => {
    const response = await axios.get(`${baseUrl}`);  
    const filtered = response.data.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  }
);


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
    builder.addCase(showAllAdmin.fulfilled, (state, action) => {
     state.users=action.payload
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      // state.users=action.payload
      state.users = state.users.filter(user => user.id !== action.payload);

     })
   
      builder.addCase(editUserInfo.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const userIndex = state.users.findIndex(user => user.id === updatedUser.id);
        if (userIndex !== -1) {
          state.users[userIndex] = updatedUser; 
        }
      })
      builder.addCase(searchUser.fulfilled, (state, action) => {
        state.users = action.payload;  
      });
  },

})


export default userSlice.reducer