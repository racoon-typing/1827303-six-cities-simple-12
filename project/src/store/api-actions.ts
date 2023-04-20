import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { ConstructorRoom } from '../types/offer';
import { Review } from '../types/review';
import { APIRoute, AppRoute } from '../consts/consts';
import { dropToken, saveToken } from '../services/token';
import { database } from 'faker';


export const fetchOffersAction = createAsyncThunk<ConstructorRoom[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<ConstructorRoom[]>(APIRoute.Offers);
    return data;
  },
);


type IdType = string | undefined;

export const fetchCurrentOfferAction = createAsyncThunk<ConstructorRoom, IdType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ConstructorRoom>(`${APIRoute.Offers}/${id as string}`);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<ConstructorRoom[], IdType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadNearOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ConstructorRoom[]>(`${APIRoute.Offers}/${id as string}/nearby`);
    return data;
  },
);


export const fetchCommentAction = createAsyncThunk<Review[], IdType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id as string}`);
    return data;
  },
);

type CommentData = {
  offerId: string | undefined;
  datas: {
    comment: string;
    rating: number;
  };
}


export const sendCommentAction = createAsyncThunk<Review[], CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({ offerId, datas }, { dispatch, extra: api }) => {
    const { comment, rating } = datas;
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${offerId as string}`, {
      comment,
      rating,
    });

    return data;
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(AppRoute.Login);
  }
);


export type AuthData = {
  login: string;
  password: string;
}

export type UserData = {
  id: number;
  email: string;
  token: string;
  avatarUrl: string;
};

export type UserInfo = {
  userEmail: string;
  avatarUrl: string;
};


export const loginAction = createAsyncThunk<UserInfo, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token, email: userEmail, avatarUrl } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);

    return {userEmail, avatarUrl};
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);


