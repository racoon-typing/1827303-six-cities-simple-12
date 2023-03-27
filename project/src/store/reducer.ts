import { createReducer } from '@reduxjs/toolkit';
import { Data } from '../mocks/offers';
// import { ConstructorRoom } from '../types/offer';
import {
  changeCity,
  // fillCities
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
// .addCase(fillCities, (state, action) => {
//   const {needOffer} = action.payload;

//   state.offers = needOffer;
// });

export { reducer };
