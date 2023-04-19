import { NameSpace } from '../../consts/consts';
import { ConstructorRoom } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getOffers = (state: State): ConstructorRoom[] => state[NameSpace.Data].offers;
export const getData = (state: State): ConstructorRoom[] => state[NameSpace.Data].data;
export const getOffer = (state: State): ConstructorRoom | null => state[NameSpace.Data].getOffer;
export const getNearOffers = (state: State): ConstructorRoom[] => state[NameSpace.Data].nearOffers;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersLoading;
export const getFilterName = (state: State): string => state[NameSpace.Data].filterName;
export const getErrorLoadingOffer = (state: State): boolean => state[NameSpace.Data].errorLoadingOffer;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
export const getNearOfferLoadingStatus = (state: State): boolean => state[NameSpace.Data].isNearOfferLoading;
export const getErrorStatusReviews = (state: State): boolean => state[NameSpace.Data].errorLoadingReviews;
export const getisDisabledStatusForm = (state: State): boolean => state[NameSpace.Data].isDisabledForm;
