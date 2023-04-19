import { dataProcess } from './data-process';
import {
  // changeOption,
  changeOfferList } from './data-process';
import { makeFakeOfferList } from '../../utils/mocks';

const mockOfferList = makeFakeOfferList();

describe('Reducer: dataProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
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
      });
  });

  it('filter offers by select City', () => {
    const state = {
      offers: [],
      getOffer: null,
      nearOffers: [],
      data: mockOfferList,
      reviews: [],
      isOffersLoading: false,
      filterName: '',
      errorLoadingOffer: false,
      isNearOfferLoading: false,
      hasError: false,
      errorLoadingReviews: false,
    };
    const cityFilter = mockOfferList[0].city.name;
    const filterOffers = mockOfferList.filter((оffer) => оffer.city.name === cityFilter);

    expect(dataProcess.reducer(state, changeOfferList({cityName: cityFilter})))
      .toEqual({
        offers: filterOffers,
        getOffer: null,
        nearOffers: [],
        data: mockOfferList,
        reviews: [],
        isOffersLoading: false,
        filterName: '',
        errorLoadingOffer: false,
        isNearOfferLoading: false,
        hasError: false,
        errorLoadingReviews: false,
      });
  });
});

