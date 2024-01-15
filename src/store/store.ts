import {configureStore} from '@reduxjs/toolkit'
import binsSlice from './slices/bins.slice.ts'

export const store = configureStore({
    reducer: {
        bins: binsSlice
    },
    devTools: true
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch