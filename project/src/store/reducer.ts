import { createReducer } from '@reduxjs/toolkit';
import { Data } from '../mocks/offers';

import {
  changeCity,
  changeOfferList,
  hoverCity
} from './action';

const initialState = {
  city: 'Paris',
  offers: Data,
  hoverCity: 0,
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
    })
    .addCase(hoverCity, (state, action) => {
      const { hoveredCity } = action.payload;

      state.hoverCity = hoveredCity;
    });
});

export { reducer };
