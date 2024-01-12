import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export const binsSlice = createSlice({
    name: 'bins',
    initialState: [],
    reducers: {
        addBins(state, action: PayloadAction<number>) {
            state.count += action.payload
        }
    },
});

export const {addBins} = binsSlice.actions;
export default binsSlice.reducer;