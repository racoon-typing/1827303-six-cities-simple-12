import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { ConstructorRoom } from '../types/offer';
import { Review } from '../types/review';
import {
  // setLoadOffersStatus,
  // loadOffers,
  // loadOffer,
  // loadNearOffers,
  // requireAuthorization,
  setError,
  loadComments,
} from './action';
import { APIRoute, AppRoute,
  // AuthorizationStatus,
  TIMEOUT_SHOW_ERROR } from '../consts/consts';
import { store } from '.';
import { dropToken, saveToken } from '../services/token';


export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  },
);


// Дата: готов

// export const fetchOffersAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/loadOffers',
//   async (_arg, { dispatch, extra: api }) => {
//     dispatch(setLoadOffersStatus(true));
//     const { data } = await api.get<ConstructorRoom[]>(APIRoute.Offers);
//     dispatch(setLoadOffersStatus(false));
//     dispatch(loadOffers(data));
//   },
// );

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

// export const fetchCurrentOfferAction = createAsyncThunk<void, IdType, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/loadOffer',
//   async (id, { dispatch, extra: api }) => {
//     const { data } = await api.get<ConstructorRoom>(`${APIRoute.Offers}/${id as string}`);
//     dispatch(loadOffer(data));
//   },
// );

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

// export const fetchNearOffersAction = createAsyncThunk<void, IdType, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/loadNearOffers',
//   async (id, { dispatch, extra: api }) => {
//     const { data } = await api.get<ConstructorRoom[]>(`${APIRoute.Offers}/${id as string}/nearby`);
//     dispatch(loadNearOffers(data));
//   },
// );


export const fetchNearOffersAction = createAsyncThunk<ConstructorRoom[], IdType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadNearOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ConstructorRoom[]>(`${APIRoute.Offers}/${id as string}/nearby`);
    // dispatch(loadNearOffers(data));
    return data;
  },
);


// Комментарии:

// export const fetchCommentAction = createAsyncThunk<void, IdType, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/loadComments',
//   async (id, { dispatch, extra: api }) => {
//     const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id as string}`);
//     dispatch(loadComments(data));
//   },
// );

export const fetchCommentAction = createAsyncThunk<Review[], IdType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id as string}`);
    // dispatch(loadComments(data));
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

export const sendCommentAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ offerId, datas }, { dispatch, extra: api }) => {
    const { comment, rating } = datas;
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${offerId as string}`, {
      comment,
      rating,
    });

    dispatch(loadComments(data));
  },
);


// User: готов

// export const checkAuthAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/checkAuth',
//   async (_arg, { dispatch, extra: api }) => {
//     try {
//       await api.get(AppRoute.Login);
//       dispatch(requireAuthorization(AuthorizationStatus.Auth));
//     } catch {
//       dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//     }
//   }
// );

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
};

// export const loginAction = createAsyncThunk<void, AuthData, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/login',
//   async ({ login: email, password }, { dispatch, extra: api }) => {
//     const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
//     saveToken(token);
//     dispatch(requireAuthorization(AuthorizationStatus.Auth));
//   },
// );
export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
  },
);

// export const logoutAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'user/logout',
//   async (_arg, { dispatch, extra: api }) => {
//     await api.delete(APIRoute.Logout);
//     dropToken();
//     dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//   },
// );

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    // dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);


