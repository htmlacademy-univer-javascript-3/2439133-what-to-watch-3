import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {Film} from '../mocks/films';
import {AxiosInstance} from 'axios';
import {State} from './reducer';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {changeGenre, redirectToRoute, requireAuthorization, setFilms, setFilmsLoadingStatus} from './action';
import {Detail} from '../mocks/films-details';
import {store} from './index';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken} from '../services/token';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getAll',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setFilmsLoadingStatus(false));
    dispatch(setFilms(data));
    store.dispatch(changeGenre('All genres'));
  },
);

export const getFilmAction = createAsyncThunk<Detail, number, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/get',
  async (id, {_, extra: api}) => {
    const {data} = await api.get<Detail>(`${APIRoute.Films}${id}`);
    return data;
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
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
