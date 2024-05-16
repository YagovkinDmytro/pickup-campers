import { createSlice } from '@reduxjs/toolkit';

const modalCardDetailsState = {
  details: { closeModal: false, id: '' },
};

const details = createSlice({
  name: 'details',
  initialState: modalCardDetailsState,
  reducers: {
    setCloseModal: (state, { payload }) => {
      state.details.closeModal = payload;
    },
    setModalCardDetailsId: (state, { payload }) => {
      state.details.id = payload;
    },
  },
});

export const { setCloseModal, setModalCardDetailsId } = details.actions;
export const detailsModalSliceReduser = details.reducer;
