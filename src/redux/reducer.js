import { campersSliceReducer } from './campersSlice';
import { detailsModalSliceReduser } from './modalCardDetailsSlice';
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
  details: detailsModalSliceReduser,
  favorites: persistedReducer,
};
