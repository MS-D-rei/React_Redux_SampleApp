import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/slice';

export const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred reducer's value type
export type AppDispatch = typeof store.dispatch;
