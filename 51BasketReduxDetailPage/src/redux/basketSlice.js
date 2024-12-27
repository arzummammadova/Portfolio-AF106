import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};


const basket = createSlice({
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
    
    plusBtn: (state, action)=>{
        const existingProduct = state.value.find(item => item.id === action.payload.id);
     if (existingProduct){ 
      const incrementCount = action.payload.count ? action.payload.count : 1; existingProduct.count +=incrementCount;
     }
       
    },

    
    minusBtn:(state,action)=>{
      const existingProduct=state.value.find(item=>item.id==action.payload.id);
      if(existingProduct){
        const decrement=action.payload.count? action.payload.count:1;
        existingProduct.count-=decrement;
      }

    },

    removeProduct:(state,action)=>{
         state.value=state.value.filter((item)=>item.id!==action.payload.id);
    }
,
    resetAll:(state)=>{
      state.value=[]
    }
  },
});

export const { addToBasket,plusBtn,minusBtn ,removeProduct,resetAll} = basket.actions;
export default basket.reducer;
