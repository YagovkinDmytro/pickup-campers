import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.campers.items;

export const selectIsLoading = state => state.campers.campers.isloading;

export const selectError = state => state.campers.campers.error;

export const selectFilters = state => state.filters.filters;

export const selectLocation = state => state.filters.filters.location;

export const selectCampersPage = state => state.filters.page;

export const selectCampersLimit = state => state.filters.limit;

export const selectModalCardDetailsId = state => state.details.details.id;

export const selectFavoritesIdArr = state => state.favorites.favoritesId;

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

export const selectFilteredCampers = createSelector(
  [selectInfoCardCampers, selectFilters],
  (campers, filters) => {
    let result = [...campers];

    const makePredicates = f => [
      camper => !f.location || camper.location === f.location,
      camper => !f.transmission || camper.transmission === f.transmission,
      camper => !f.engine || camper.engine === f.engine,
      camper => !f.gas || camper.details.gas !== '',
      camper =>
        f.features.length === 0 ||
        f.features.every(feat => camper.details[feat] > 0),
      camper => !f.form || camper.form === f.form,
    ];

    const applyFilters = (campers, filters) => {
      const predicates = makePredicates(filters);
      return campers.filter(camper => predicates.every(p => p(camper)));
    };

    return applyFilters(result, filters);
  }
);

export const selectVisibleCampers = createSelector(
  [selectFilteredCampers, selectCampersPage, selectCampersLimit],
  (filtered, page, limit) => {
    const visible = filtered.slice(0, page * limit);
    return visible;
  }
);

export const selectFavoritesCampers = createSelector(
  [selectInfoCardCampers, selectFavoritesIdArr],
  (campers, favoritesId) => {
    const favoritesSet = new Set(favoritesId);
    return campers.filter(camper => favoritesSet.has(camper._id));
  }
);
