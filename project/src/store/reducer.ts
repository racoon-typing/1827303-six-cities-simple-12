import { createReducer } from '@reduxjs/toolkit';
import { Data } from '../mocks/offers';

import {
  changeCity,
  changeOfferList
} from './action';

const initialState = {
  city: 'Paris',
  offers: Data,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { activeCity } = action.payload;

      state.city = activeCity;
    })
    .addCase(changeOfferList, (state, action) => {
      const { cityName } = action.payload;

      const newOffer = Data.filter((оffer) => оffer.city.name === cityName);
      state.offers = newOffer;
    });
});

export { reducer };
