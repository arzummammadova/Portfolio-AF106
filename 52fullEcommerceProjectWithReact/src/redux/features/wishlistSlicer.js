import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addAndRemoveToWishlist: (state, action) => {
            const existingProduct = state.wishlist.find((product) => product.id === action.payload.id);
            if(!existingProduct) {
                state.wishlist.push(action.payload);
            }else{
                state.wishlist = state.wishlist.filter((product) => product.id !== action.payload.id);
            }

        },

        removeallWishlist:(state)=>{
            state.wishlist=[]
        }
,
        deleteproductWishlist:((state,action)=>{
            const existingProduct=state.wishlist.find((product)=>product.id===action.payload.id)
            if(existingProduct){
                state.wishlist=state.wishlist.filter((product)=>product.id!==action.payload.id)
            }
            
        })


    }
})

export const { addAndRemoveToWishlist,removeallWishlist,deleteproductWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
