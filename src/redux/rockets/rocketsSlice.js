// rocketsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  return response.data.map((rocket) => ({ ...rocket, reserved: false })); // Add reserved field
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    bookRocket: (state, action) => {
      const rocket = state.find((rocket) => rocket.id === action.payload);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelRocketBooking: (state, action) => {
      const rocket = state.find((rocket) => rocket.id === action.payload);
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { bookRocket, cancelRocketBooking } = rocketsSlice.actions;
export default rocketsSlice.reducer;
