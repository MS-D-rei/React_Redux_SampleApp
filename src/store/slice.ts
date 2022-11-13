import { createSlice } from '@reduxjs/toolkit';
import { Counter } from '@/store/types';

const counterSlice = createSlice({
  name: 'counters',
  initialState: { counter: 0 },
  reducers: {
    increment(state: Counter) {
      state.counter += 1;
    },
    decrement(state: Counter) {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
