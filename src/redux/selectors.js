import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.campers.items;

export const selectIsLoading = state => state.campers.campers.isloading;

export const selectError = state => state.campers.campers.error;

export const selectFilters = state => state.filters.filters;

export const selectLocation = state => state.filters.filters.location;

export const selectCardDetailsPage = state => state.filters.page;

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
        form,
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
          details,
          form,
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
  [selectInfoCardCampers, selectLocation, selectFilters],
  (campers, location, filters) => {
    let result = [...campers];

    if (location) {
      result = result.filter(camper => camper.location === location);
    }

    if (filters.transmission) {
      result = result.filter(
        camper => camper.transmission === filters.transmission
      );
    }

    if (filters.engine) {
      result = result.filter(camper => camper.engine === filters.engine);
    }

    if (filters.gas) {
      result = result.filter(camper => camper.details.gas !== '');
    }

    if (filters.features.length > 0) {
      result = result.filter(camper =>
        filters.features.every(feature => {
          if (typeof camper.details[feature] === 'number') {
            return camper.details[feature] > 0;
          }
          return false;
        })
      );
    }

    return result;
  }
);
