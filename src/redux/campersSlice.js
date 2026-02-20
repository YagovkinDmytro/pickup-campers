import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersAll, fetchLoadMore } from './operations';

const handlePending = state => {
  state.campers.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.campers.isLoading = false;
  state.campers.error = payload;
};

const campersInitialState = {
  campers: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const campersSlice = createSlice({
  name: 'campersAll',
  initialState: campersInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampersAll.pending, handlePending)
      .addCase(fetchCampersAll.fulfilled, (state, { payload }) => {
        state.campers.isLoading = false;
        state.campers.error = null;
        state.campers.items = payload;
      })
      .addCase(fetchCampersAll.rejected, handleRejected)
      .addCase(fetchLoadMore.pending, handlePending)
      .addCase(fetchLoadMore.fulfilled, (state, { payload }) => {
        state.campers.isLoading = false;
        state.campers.error = null;
        state.campers.items.push(...payload);
      })
      .addCase(fetchLoadMore.rejected, handleRejected);
  },
});

export const campersSliceReducer = campersSlice.reducer;
