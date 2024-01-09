import {
  changeGenre,
  requireAuthorization, setFavorites,
  setFilm,
  setFilmComments,
  setFilms,
  setFilmsLoadingStatus,
  setSimilarFilms
} from './action';
import {Film, FilmInList} from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import {getFilmsByGenre} from '../getFilmsByGenre';
import {AuthorizationStatus} from '../const';
import {Review} from '../mocks/films-reviews';

export type State = {
  genre: string;
  filmsByGenre: FilmInList[];
  films: FilmInList[];
  favorites: FilmInList[];
  similarFilms: FilmInList[];
  currentFilm?: Film;
  filmComments: Review[];
  filmsLoadingStatus: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: State = {
  genre: 'All genres',
  filmsByGenre: [],
  films: [],
  similarFilms: [],
  favorites: [],
  currentFilm: undefined,
  filmComments: [],
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
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(setFilmComments, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.filmsLoadingStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
