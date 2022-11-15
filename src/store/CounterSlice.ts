import { createSlice } from '@reduxjs/toolkit';

// Why Redux Toolkit is How To Use Redux Today
// https://redux.js.org/introduction/why-rtk-is-redux-today

// Redux Docs Basic Example
// https://redux.js.org/introduction/getting-started#redux-toolkit-example

interface CounterState {
  value: number;
  isShown: boolean;
}

const initialCounterState: CounterState = { value: 0, isShown: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    toggleCounter: (state) => {
      state.isShown = !state.isShown;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
