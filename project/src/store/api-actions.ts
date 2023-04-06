import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { ConstructorRoom } from '../types/offer';
import {
  setLoadOffersStatus,
  loadOffers,
  loadOffer,
  loadNearOffers,
  requireAuthorization,
  setError
} from './action';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts/consts';
import { store } from '.';


export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  },
);


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadOffersStatus(true));
    const { data } = await api.get<ConstructorRoom[]>(APIRoute.Offers);
    dispatch(setLoadOffersStatus(false));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(AppRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

type IdType = string | undefined;

export const fetchCurrentOfferAction = createAsyncThunk<void, IdType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ConstructorRoom>(`${APIRoute.Offers}/${id as string}`);
    dispatch(loadOffer(data));
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, IdType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadNearOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ConstructorRoom[]>(`${APIRoute.Offers}/${id as string}/nearby`);
    dispatch(loadNearOffers(data));
  },
);

export const fetchCommentAction = createAsyncThunk<void, IdType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadNearOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ConstructorRoom[]>(`${APIRoute.Comments}/${id as string}`);
    dispatch(loadNearOffers(data));
  },
);

