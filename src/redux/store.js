import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feauture/counter/counterSlice';
import bmiCalculatorReducer from './feauture/bmiCalculator/bmiCalculatorSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        bmiCalculator: bmiCalculatorReducer,
    },
  })