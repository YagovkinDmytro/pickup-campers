import { campersSliceReducer } from './campersSlice';
import { detailsModalSliceReduser } from './ModalCardDetailsSlice';

export const rootReducer = {
  campers: campersSliceReducer,
  details: detailsModalSliceReduser,
};
