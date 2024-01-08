import {changeGenre, requireAuthorization, setFilms, setFilmsLoadingStatus} from './action';
import {Film} from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import {getFilmsByGenre} from '../getFilmsByGenre';
import {AuthorizationStatus} from '../const';

export type State = {
  genre: string;
  filmsByGenre: Film[];
  films: Film[];
  filmsLoadingStatus: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: State = {
  genre: 'All genres',
  filmsByGenre: [],
  films: [],
  filmsLoadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsByGenre = getFilmsByGenre(action.payload, state.films);
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.filmsLoadingStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
