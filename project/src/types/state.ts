import { AuthorizationStatus } from '../consts/consts';
import {store} from '../store/index';
import { ConstructorRoom } from './offer';
import { Review } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type MainProcess = {
  city: string;
  hoverCity: number;
}

export type DataProcess = {
  offers: ConstructorRoom[];
  getOffer: ConstructorRoom | null;
  nearOffers: ConstructorRoom[];
  data: ConstructorRoom[];
  reviews: Review[];
  isOffersLoading: boolean;
  filterName: string;
  error: string | null;
  hasError: boolean;
}
