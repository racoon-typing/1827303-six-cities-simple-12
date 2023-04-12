// import { NameSpace } from "../../consts/consts";
import { ConstructorRoom } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getOffers = (state: State): ConstructorRoom[] => state.offers;
export const getData = (state: State): ConstructorRoom[] => state.data;
export const getOffer = (state: State): ConstructorRoom | null => state.getOffer;
export const getNearOffers = (state: State): ConstructorRoom[] => state.nearOffers;
export const getReviews = (state: State): Review[] => state.reviews;
export const getOffersLoadingStatus = (state: State): boolean => state.isOffersLoading;
export const getFilterName = (state: State): string => state.filterName;
