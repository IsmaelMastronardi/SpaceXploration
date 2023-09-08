// rocketsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  return response.data.map((rocket) => ({ ...rocket, reserved: false }));
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    toggleReservation: (state, action) => {
      const rocket = state.find((rocket) => rocket.id === action.payload);
      if (rocket) {
        rocket.reserved = !rocket.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { toggleReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
