import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accent: 'blue'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setAccent(state, action) {
      state.accent = action.payload;
    }
  }
});

export const { setAccent } = uiSlice.actions;
export default uiSlice.reducer;
