import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { modelsLabApi } from './api/models-lab'
import hostReducer from './hostSlice'

export const store = configureStore({
    reducer: {
        [modelsLabApi.reducerPath]: modelsLabApi.reducer,
        host: hostReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(modelsLabApi.middleware),
})

setupListeners(store.dispatch)