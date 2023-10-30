import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weight: '',
    height: '',
    isShow: false,
    bmi: '',
}

export const bmiCalculatorSlice = createSlice({
    name: 'bmiCalculator',
    initialState,
    reducers: {
        setWeight: (state, action) => {
            state.weight = action.payload;
        },
        setHeight: (state, action) => {
            state.height = action.payload;
        },
        setIsShow: (state, action) => {
            state.isShow = action.payload;
        },
        setBmi: (state, action) => {
            state.bmi = action.payload;
        },
    }
});

export const { setWeight, setHeight, setIsShow, setBmi } = bmiCalculatorSlice.actions;
export default bmiCalculatorSlice.reducer;