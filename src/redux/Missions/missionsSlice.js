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
  missionsArr: [],
  status: 'loading',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    memberStatus: (state, action) => {
      const id = action.payload;
      const mission = state.missionsArr.find((obj) => obj.mission_id === id);
      if (!mission.reserved) {
        mission.reserved = true;
      } else {
        mission.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.status = 'fullfilled';
      state.missionsArr = action.payload;
    });
  },
});

export const { memberStatus } = missionSlice.actions;
export default missionSlice.reducer;
