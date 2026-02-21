import { createSlice } from '@reduxjs/toolkit';

const modalCardDetailsState = {
  details: { id: '' },
};

const details = createSlice({
  name: 'details',
  initialState: modalCardDetailsState,
  reducers: {
    setModalCardDetailsId: (state, { payload }) => {
      state.details.id = payload;
    },
  },
});

export const { setModalCardDetailsId } = details.actions;
export const modalCardDetailsSliceReducer = details.reducer;
