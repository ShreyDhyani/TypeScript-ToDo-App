import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: 'color_yellow',
  },
  reducers: {
    setColor: (state, action) => {
        state.color = action.payload.color; 
    },
    clearColor: (state) => {
        state.color = 'color_yellow';
    },
  },
});

export const {
  setColor,
  clearColor,
} = colorSlice.actions;

export default colorSlice.reducer;