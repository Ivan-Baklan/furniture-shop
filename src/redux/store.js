import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer)
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: persistedReducer,
  },
})
const persistor = persistStore(store)

export { store, persistor }
