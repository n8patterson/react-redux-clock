import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../components/clock/ClockSlice';

export const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
});
