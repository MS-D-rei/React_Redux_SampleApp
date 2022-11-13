import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '@/store/types';

// Why Redux Toolkit is How To Use Redux Today
// https://redux.js.org/introduction/why-rtk-is-redux-today

// Redux Docs Basic Example
// https://redux.js.org/introduction/getting-started#redux-toolkit-example

const initialState: CounterState = { counter: 0 };

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
      state.counter += action.payload
    }
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
