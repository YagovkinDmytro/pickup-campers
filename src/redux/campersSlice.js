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
  campers: { items: [], isLoading: false, error: null, page: 1 },
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.campers.page = payload;
    },
    // addCampersItems: (state, { payload }) => {
    //   state.campers.items = payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.campers.isLoading = false;
        state.campers.error = null;
        state.campers.items = payload;
        // return { ...state, campers: [...state.campers, payload] };
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { setPage } = campersSlice.actions;
export const campersSliceReducer = campersSlice.reducer;
