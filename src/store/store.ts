import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/CounterSlice';
import authReducer from '@/store/AuthSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred reducer's value type
export type AppDispatch = typeof store.dispatch;
