import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    value: [],
  };







const  details=createSlice({
    name:"detail",
    initialState,
    reducers:{
        // addToBasket: (state, action) => {
        //     const existingProduct = state.value.find(item => item.id === action.payload.id);
      
        //     if (existingProduct) {
        //       existingProduct.count += 1;
        //     } else {
        //       state.value.push({ ...action.payload, count: 1 });
        //     }
        //   },
    }


})

// export const { addToBasket} = details.actions;
export default details.reducer;