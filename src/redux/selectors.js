import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.campers.items;

export const selectIsLoading = state => state.campers.campers.isloading;

export const selectError = state => state.campers.campers.error;

export const selectFilters = state => state.campers.campers.filters;

export const selectLocation = state => state.campers.campers.filters.location;

export const selectCardDetailsPage = state => state.campers.campers.page;

export const selectModalCardDetailsId = state => state.details.details.id;

export const selectfavoritesIdArr = state => state.favorites.favoritesId;

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

export const selectModalCamper = createSelector(
  [selectCampers, selectModalCardDetailsId],
  (campers, CardId) => {
    return campers.find(camper => camper['_id'] === CardId) || null;
  }
);

export const selectLocationList = createSelector([selectCampers], campers => {
  const locationList = campers.map(({ location }) => {
    return location;
  });
  const uniqueCities = [...new Set(locationList)];
  return uniqueCities;
});

export const selectVisibleCampers = createSelector(
  [selectInfoCardCampers, selectLocation],
  (campers = [], location) => {
    if (!location) {
      return campers;
    }

    if (location) {
      return (campers = campers.filter(c => c.location.includes(location)));
    }

    return campers;
  }
);
