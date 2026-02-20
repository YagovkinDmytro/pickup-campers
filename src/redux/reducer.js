import { campersSliceReducer } from './campersSlice';
import { modalCardDetailsSliceReducer } from './modalCardDetailsSlice';
import { filtersSliceReducer } from './filtersSlice';
import { favoritesReducer } from './favoritesSlice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favoritesId'],
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const rootReducer = {
  campers: campersSliceReducer,
  details: modalCardDetailsSliceReducer,
  filters: filtersSliceReducer,
  favorites: persistedReducer,
};
