import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {Film, FilmInList, PromoFilm} from '../mocks/films';
import {AxiosInstance} from 'axios';
import {State} from './reducer';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  changeGenre,
  redirectToRoute,
  requireAuthorization, setFavorites,
  setFilm, setFilmComments,
  setFilms,
  setFilmsLoadingStatus, setPromoFilm,
  setSimilarFilms, setUserData
} from './action';
import {store} from './index';
import {dropToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {Review, ReviewData} from '../mocks/films-reviews';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getAll',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<FilmInList[]>(APIRoute.Films);
    dispatch(setFilmsLoadingStatus(false));
    dispatch(setFilms(data));
    store.dispatch(changeGenre('All genres'));
  },
);

export const getFilmAction = createAsyncThunk<void, string, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/get',
  async (id, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(setFilmsLoadingStatus(false));
    dispatch(setFilm(data));
  },
);

export const getPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getPromo',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoFilm>(`${APIRoute.Promo}`);
    dispatch(setPromoFilm(data));
  },
);

export const getSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getSimilar',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInList[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(setSimilarFilms(data));
  },
);

export const getFilmReviewsAction = createAsyncThunk<void, string, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setFilmComments(data));
  },
);

export const getFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getFavorites',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInList[]>(`${APIRoute.Favorite}`);
    dispatch(setFavorites(data));
  },
);

export const addFavoriteAction = createAsyncThunk<void, {id: string; status: number}, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/addFavorite',
  async ({id: id, status: status}, {extra: api}) => {
    await api.post<Film>(`${APIRoute.Favorite}/${id}/${status}`);
  },
);

export const addReview = createAsyncThunk<void, ReviewData, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/addReview',
  async ({filmId: filmId, comment: comment, rating: rating}, {extra: api}) => {
    await api.post<Review>(`${APIRoute.Comments}/${filmId}`, { comment: comment, rating: rating});
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email: email, password: password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
