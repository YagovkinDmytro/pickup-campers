import { createSlice } from '@reduxjs/toolkit';

const favoritesState = { favoritesId: [], favoritesList: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesState,
  reducers: {
    toggleFavorites(state, { payload }) {
      if (state.favoritesId.includes(payload)) {
        state.favoritesId = state.favoritesId.filter(
          favorite => favorite !== payload
        );
      } else {
        state.favoritesId.push(payload);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
