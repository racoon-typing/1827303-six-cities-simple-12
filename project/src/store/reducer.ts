import { createReducer } from '@reduxjs/toolkit';
import { ConstructorRoom } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatus } from '../consts/consts';

import {
  changeCity,
  changeOfferList,
  hoverCity,
  changeOption,
  loadOffers,
  loadOffer,
  loadNearOffers,
  setLoadOffersStatus,
  loadComments,
  requireAuthorization,
  setError,
} from './action';

type InitalState = {
  city: string;
  offers: ConstructorRoom[];
  getOffer: ConstructorRoom | null;
  nearOffers: ConstructorRoom[];
  data: ConstructorRoom[];
  reviews: Review[];
  hoverCity: number;
  filterName: string;
  isOffersLoading: boolean;
  authorizationStatus: string;
  error: string | null;
}

const initialState: InitalState = {
  city: 'Paris',
  offers: [],
  getOffer: null,
  nearOffers: [],
  data: [],
  reviews: [],
  hoverCity: 0,
  filterName: '',
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};


function filterPrice(a: number, b: number) {
  return (a - b);
}

function filterRating(a: number, b: number) {
  return (a - b);
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { activeCity } = action.payload;

      state.city = activeCity;
    })
    .addCase(changeOfferList, (state, action) => {
      const { cityName } = action.payload;

      const newOffer = state.data.filter((оffer) => оffer.city.name === cityName);
      state.offers = newOffer;
    })
    .addCase(hoverCity, (state, action) => {
      const { hoveredCity } = action.payload;

      state.hoverCity = hoveredCity;
    })
    .addCase(changeOption, (state, action) => {
      const { filterName } = action.payload;

      if (filterName === 'Price: low to high') {
        const filterOffer = state.offers.sort((a, b) => filterPrice(a.price, b.price));
        state.offers = filterOffer;
      } else if (filterName === 'Price: high to low') {
        const filterOffer = state.offers.sort((a, b) => filterPrice(b.price, a.price));
        state.offers = filterOffer;
      } else if (filterName === 'Top rated first') {
        const filterOffer = state.offers.sort((a, b) => filterRating(b.rating, a.rating));
        state.offers = filterOffer;
      } else {
        const filterOffer = state.offers.sort((a, b) => filterPrice(a.id, b.id));
        state.offers = filterOffer;
      }

      state.filterName = filterName;
    })
    .addCase(loadOffers, (state, action) => {
      state.data = action.payload;
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.getOffer = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setLoadOffersStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      console.log(action.payload);

      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
