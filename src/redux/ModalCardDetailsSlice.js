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

export const { setModal, setModalCardDetailsId } = details.actions;
export const modalCardDetailsReduser = details.reducer;
