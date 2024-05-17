import { campersSliceReducer } from './campersSlice';
import { detailsModalSliceReduser } from './modalCardDetailsSlice';

export const rootReducer = {
  campers: campersSliceReducer,
  details: detailsModalSliceReduser,
};
