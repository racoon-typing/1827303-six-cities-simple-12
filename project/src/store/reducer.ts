import { createReducer } from '@reduxjs/toolkit';
import { Data } from '../mocks/offers';
// import { filterOffers } from './filter';

import {
  changeCity,
  // changeOfferList
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
    });
});

// .addCase(changeOfferList, (state, action) => {
//   const {someOffers, cityName} = action.payload;
//   console.log(someOffers);
//   console.log(cityName);

//   state.offers = filterOffers(someOffers, cityName);
// });

export { reducer };
