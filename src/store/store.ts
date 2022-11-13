import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/slice';

export const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});
