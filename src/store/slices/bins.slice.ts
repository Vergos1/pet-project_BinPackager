import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type BinsState = {
    h: number,
    w: number,
}
export const binsSlice = createSlice({
    name: 'bins',
    initialState: [] as BinsState[],
    reducers: {
        addBins(state, action: PayloadAction<{ width: number, height: number, quantity: number }>) {
            for (let i = 0; i < action.payload.quantity; i++) {
                state.push({
                    h: action.payload.height,
                    w: action.payload.width
                });
            }
        },
        clearBins(state) {
            state.length = 0
        }
    },
});

export const {addBins, clearBins} = binsSlice.actions;
export default binsSlice.reducer;