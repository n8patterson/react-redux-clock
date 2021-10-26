import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../components/clock/clockSlice';

export const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
});
