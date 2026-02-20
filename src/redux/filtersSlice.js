import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filters: {
    location: '',
    transmission: '',
    engine: '',
    features: [],
  },
  page: 1,
  limit: 4,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setLocation: (state, { payload }) => {
      state.filters.location = payload;
    },
    toggleFeature(state, { payload }) {
      if (state.filters.features.includes(payload)) {
        state.filters.features = state.filters.features.filter(
          features => features !== payload
        );
      } else {
        state.filters.features.push(payload);
      }
    },
    setTransmission(state, { payload }) {
      state.filters.transmission =
        state.filters.transmission === payload ? '' : payload;
    },
    setEngine(state, { payload }) {
      state.filters.engine = state.filters.engine === payload ? '' : payload;
    },
    resetFilters() {
      return filtersInitialState;
    },
  },
});

export const {
  setPage,
  setLocation,
  toggleFeature,
  setTransmission,
  setEngine,
  resetFilters,
} = filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
