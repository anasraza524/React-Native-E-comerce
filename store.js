import { configureStore } from '@reduxjs/toolkit'
import BasketSlice from './Feature/BasketSlice'
export const store = configureStore({
  reducer: {
    Basket:BasketSlice,
  },
})