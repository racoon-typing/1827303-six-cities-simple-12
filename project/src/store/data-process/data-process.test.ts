import { dataProcess } from './data-process';
import { changeOption, changeOfferList } from './data-process';

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

  
});

