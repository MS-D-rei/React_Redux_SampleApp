import { createSlice } from '@reduxjs/toolkit';

// Why Redux Toolkit is How To Use Redux Today
// https://redux.js.org/introduction/why-rtk-is-redux-today

// Redux Docs Basic Example
// https://redux.js.org/introduction/getting-started#redux-toolkit-example

interface CounterState {
  counter: number;
  isShown: boolean;
}

const initialState: CounterState = { counter: 0, isShown: true };

const counterSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    toggleCounter: (state) => {
      state.isShown = !state.isShown;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleCounter } = counterSlice.actions;
export default counterSlice.reducer;
