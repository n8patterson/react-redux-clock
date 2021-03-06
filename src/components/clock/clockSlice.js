import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: new Date().toLocaleString(),
};

export const clockSlice = createSlice({
  name: 'clock',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateTime: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.time = new Date().toLocaleString();
    },
  },
});

export const { updateTime } = clockSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTime = (state) => state.clock.time;

export default clockSlice.reducer;