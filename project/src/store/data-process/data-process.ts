import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts/consts';
import { DataProcess } from '../../types/state';
import { fetchCommentAction, fetchCurrentOfferAction, fetchNearOffersAction, fetchOffersAction, sendCommentAction } from '../api-actions';
import { DEFAULT_CITY } from '../../consts/consts';

function filterPrice(a: number, b: number) {
  return (a - b);
}

function filterRating(a: number, b: number) {
  return (a - b);
}

const initialState: DataProcess = {
  offers: [],
  getOffer: null,
  nearOffers: [],
  data: [],
  reviews: [],
  isOffersLoading: false,
  filterName: '',
  errorLoadingOffer: false,
  isNearOfferLoading: false,
  hasError: false,
  errorLoadingReviews: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeOption: (state, action: PayloadAction<{filterName: string}>) => {
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
    },
    changeOfferList: (state, action: PayloadAction<{cityName: string}>) => {
      const { cityName } = action.payload;

      const newOffer = state.data.filter((оffer) => оffer.city.name === cityName);
      state.offers = newOffer;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.data = action.payload;
        const fisrtFilterOffer = state.data.filter((оffer) => оffer.city.name === DEFAULT_CITY);
        state.offers = fisrtFilterOffer;
        state.isOffersLoading = false;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.errorLoadingOffer = false;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.getOffer = action.payload;
        state.errorLoadingOffer = false;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.errorLoadingOffer = true;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isNearOfferLoading = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isNearOfferLoading = false;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.isNearOfferLoading = false;
      })
      .addCase(fetchCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendCommentAction.pending, (state) => {
        state.errorLoadingReviews = false;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.errorLoadingReviews = false;
      })
      .addCase(sendCommentAction.rejected, (state) => {
        state.errorLoadingReviews = true;
      });
  }
});


export const { changeOption, changeOfferList} = dataProcess.actions;
