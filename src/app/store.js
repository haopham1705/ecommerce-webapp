import userReducer from 'features/Auth/userSlice'
import cartReducer from 'features/Cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
}

export const store = configureStore({
  reducer: rootReducer
})
