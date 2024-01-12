import {configureStore} from '@reduxjs/toolkit'
import {addBins} from './slices/bins.slice.ts'

export const store = configureStore({
    reducer: {
        bins: addBins
    },
    devTools: true
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch