import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const handlePending = state => {
  state.campers.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.campers.isLoading = false;
  state.campers.error = payload;
};

const campersInitialState = {
  campers: { items: [], isLoading: false, error: null },
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.campers.isLoading = false;
        state.campers.error = null;
        state.campers.items = payload;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const campersSliceReducer = campersSlice.reducer;
