import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { ConstructorRoom } from '../types/offer';
import { loadOffers } from './action';
import { APIRoute } from '../consts/consts';
import { setLoadOffersStatus } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadOffersStatus(true));
    const {data} = await api.get<ConstructorRoom[]>(APIRoute.Offers);
    dispatch(setLoadOffersStatus(false));
    dispatch(loadOffers(data));
  },
);
