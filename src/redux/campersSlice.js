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
    filters: {
      location: '',
    },
    page: 1,
    limit: 4,
  },
};

const campersSlice = createSlice({
  name: 'campersAll',
  initialState: campersInitialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.campers.page = payload;
    },
    setLocation: (state, { payload }) => {
      state.campers.filters.location = payload;
    },
  },
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

export const { setPage, setLocation } = campersSlice.actions;
export const campersSliceReducer = campersSlice.reducer;
