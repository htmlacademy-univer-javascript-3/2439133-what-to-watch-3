import {createAsyncThunk, Dispatch} from '@reduxjs/toolkit';
import {Film} from '../mocks/films';
import {AxiosInstance} from 'axios';
import {State} from './reducer';
import {APIRoute} from '../const';
import {changeGenre, setFilms, setFilmsLoadingStatus} from './action';
import {Detail} from '../mocks/films-details';
import {store} from './index';

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
