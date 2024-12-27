import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice'; 
import todosReducer from './TodoSlice'; 
import wishlist from './wishlistSlice'
import basket from './basketSlice'
import details from './detailsSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedBasketReducer = persistReducer(persistConfig, basket);

export const store = configureStore({
  reducer: {
    products: productReducer, 
    todos: todosReducer, 
    wishlist: wishlist,
    basket: persistedBasketReducer, 
    details: details,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
