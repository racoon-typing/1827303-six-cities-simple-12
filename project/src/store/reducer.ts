import { createReducer } from '@reduxjs/toolkit';
import { Data } from '../mocks/offers';

import {
  changeCity,
  changeOfferList,
  hoverCity,
  changeOption,
  // filterCity
} from './action';

const initialState = {
  city: 'Paris',
  offers: Data,
  hoverCity: 0,
  filterName: '',
};

// const options = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

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

      const newOffer = Data.filter((оffer) => оffer.city.name === cityName);
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
        const filterOffer = state.offers;
        state.offers = filterOffer;
      }

      state.filterName = filterName;
    });
});


export { reducer };
