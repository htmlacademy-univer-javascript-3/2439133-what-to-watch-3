import {
  changeGenre,
  requireAuthorization,
  setFavorites,
  setFilm,
  setFilmComments,
  setFilms,
  setFilmsLoadingStatus,
  setPromoFilm,
  setSimilarFilms,
  setUserData
} from './action';
import {createReducer} from '@reduxjs/toolkit';
import {getFilmsByGenre} from '../utils/getFilmsByGenre';
import {AuthorizationStatus} from '../const';
import {State} from '../types/state';

export const initialState: State = {
  genre: 'All genres',
  filmsByGenre: [],
  films: [],
  similarFilms: [],
  favorites: [],
  currentFilm: undefined,
  promoFilm: undefined,
  filmComments: [],
  filmsLoadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: undefined
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
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
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
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
