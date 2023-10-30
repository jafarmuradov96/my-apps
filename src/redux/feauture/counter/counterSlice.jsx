import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1
        },
        increment: (state) => {
            state.value += 1
        },
        incrementCustom: (state, action) => {
            state.value += action.payload
        }
    }

})

export const { decrement, increment, incrementCustom }  = counterSlice.actions;

export default counterSlice.reducer ;