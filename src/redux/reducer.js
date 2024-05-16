import { detailsModalSliceReduser } from './ModalCardDetailsSlice';
import { campersSliceReducer } from './campersSlice';

export const rootReducer = {
  campers: campersSliceReducer,
  details: detailsModalSliceReduser,
};
