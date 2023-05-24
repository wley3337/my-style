import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import testSlice from 'src/data/test/testSlice'
import { pokemonApi } from 'src/services/pokemon'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
  reducer: { testSlice, [pokemonApi.reducerPath]: pokemonApi.reducer },
})

// required for refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
