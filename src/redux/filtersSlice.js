import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filters: {
    location: '',
    transmission: '',
    engine: '',
    gas: '',
    features: [],
    form: '',
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
      state.page = 1;
    },
    toggleFeature(state, { payload }) {
      if (state.filters.features.includes(payload)) {
        state.filters.features = state.filters.features.filter(
          features => features !== payload
        );
      } else {
        state.filters.features.push(payload);
      }
      state.page = 1;
    },
    setTransmission(state, { payload }) {
      state.filters.transmission =
        state.filters.transmission === payload ? '' : payload;
      state.page = 1;
    },
    setEngine(state, { payload }) {
      state.filters.engine = state.filters.engine === payload ? '' : payload;
      state.page = 1;
    },
    setGas(state, { payload }) {
      state.filters.gas = state.filters.gas === payload ? '' : payload;
      state.page = 1;
    },
    setVehicleType(state, { payload }) {
      state.filters.form = state.filters.form === payload ? '' : payload;
      state.page = 1;
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
  setGas,
  setVehicleType,
  resetFilters,
} = filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
