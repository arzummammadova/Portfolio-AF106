import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from '../features/productSlicer.js';
import wishlistReducer from '../features/wishlistSlicer.js';
import basketReducer from '../features/basketSlice.js';
import adminReducer from '../features/adminSlice.js';
import userReducer from '../features/userSlice.js';

const basketPersistConfig = {
  key: 'basket',
  storage,
};

const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
};

const persistedBasketReducer = persistReducer(basketPersistConfig, basketReducer);
const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishlistReducer);

const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: persistedWishlistReducer,
    basket: persistedBasketReducer,
    admin: adminReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    }),
});

export const persistor = persistStore(store);
export default store;
