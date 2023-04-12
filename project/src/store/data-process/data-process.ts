import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts/consts';
import { DataProcess } from '../../types/state';
import { fetchCommentAction, fetchCurrentOfferAction, fetchNearOffersAction, fetchOffersAction } from '../api-actions';


const initialState: DataProcess = {
  offers: [],
  getOffer: null,
  nearOffers: [],
  data: [],
  reviews: [],
  isOffersLoading: false,
  filterName: '',
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.offers = action.payload;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.getOffer = action.payload;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

// .addCase(changeOfferList, (state, action) => {
//   const { cityName } = action.payload;

//   const newOffer = state.data.filter((оffer) => оffer.city.name === cityName);
//   state.offers = newOffer;
// })
// .addCase(changeOption, (state, action) => {
//   const { filterName } = action.payload;

//   if (filterName === 'Price: low to high') {
//     const filterOffer = state.offers.sort((a, b) => filterPrice(a.price, b.price));
//     state.offers = filterOffer;
//   } else if (filterName === 'Price: high to low') {
//     const filterOffer = state.offers.sort((a, b) => filterPrice(b.price, a.price));
//     state.offers = filterOffer;
//   } else if (filterName === 'Top rated first') {
//     const filterOffer = state.offers.sort((a, b) => filterRating(b.rating, a.rating));
//     state.offers = filterOffer;
//   } else {
//     const filterOffer = state.offers.sort((a, b) => filterPrice(a.id, b.id));
//     state.offers = filterOffer;
//   }

//   state.filterName = filterName;
// })
// .addCase(loadOffers, (state, action) => {
//   state.data = action.payload;
//   state.offers = action.payload;
// })
// .addCase(loadOffer, (state, action) => {
//   state.getOffer = action.payload;
// })
// .addCase(loadNearOffers, (state, action) => {
//   state.nearOffers = action.payload;
// })
// .addCase(setLoadOffersStatus, (state, action) => {
//   state.isOffersLoading = action.payload;
// })
// .addCase(loadComments, (state, action) => {
//   state.reviews = action.payload;
// })