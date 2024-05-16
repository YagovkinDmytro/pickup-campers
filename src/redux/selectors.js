import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.campers.items;

export const selectIsloading = state => state.campers.campers.isloading;

export const selectError = state => state.campers.campers.error;

export const selectCloseModal = state => state.details.details.closeModal;

export const selectModalCardDetailsId = state => state.details.details.id;

export const selectInfoCardCampers = createSelector(
  [selectCampers],
  campers => {
    return campers.map(
      ({
        _id,
        gallery,
        price,
        name,
        rating,
        reviews,
        location,
        description,
        adults,
        engine,
        transmission,
        details,
      }) => {
        const cardPicture = gallery[0];
        const { kitchen, beds, airConditioner } = details;
        const infoCardCampers = {
          _id,
          cardPicture,
          price,
          name,
          rating,
          reviews,
          location,
          description,
          adults,
          engine,
          transmission,
          kitchen,
          beds,
          airConditioner,
        };
        return infoCardCampers;
      }
    );
  }
);

export const selectInfoModalDetails = createSelector(
  [selectCampers, selectModalCardDetailsId],
  (campers, CardId) => {
    return campers.filter(camper => camper['_id'] === CardId);
  }
);
