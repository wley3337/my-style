import { configureStore } from '@reduxjs/toolkit'
import testSlice from '../test/testSlice'

export const store = configureStore({
  reducer: { testSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
