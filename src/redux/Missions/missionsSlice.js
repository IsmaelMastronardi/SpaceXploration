import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissinons',
  async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      return data;
    } catch (error) {
      throw new Error(error);
    }
  });

const initialState = {
  arr: [],
  status: 'loading',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.status = 'fullfilled';
      state.arr = action.payload;
      console.log(action.payload);
    });
  },
});

export default missionSlice.reducer;
