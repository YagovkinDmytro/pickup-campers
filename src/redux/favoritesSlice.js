import { createSlice } from '@reduxjs/toolkit';

const favoritesState = { favoritesId: [], favoritesList: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesState,
  reducers: {
    addFavoriteCardId: (state, { payload }) => {
      return { ...state, favoritesId: [...state.favoritesId, payload] };
    },
  },
});

export const { addFavoriteCardId } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
