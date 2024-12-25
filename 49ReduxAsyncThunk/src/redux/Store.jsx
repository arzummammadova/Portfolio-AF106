
import { configureStore } from '@reduxjs/toolkit'
import reducer from './TodoSlice'
export const store = configureStore({
  reducer: {
    todos:reducer,
  },
})

export default store