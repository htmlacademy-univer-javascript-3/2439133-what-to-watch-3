import { createAction } from '@reduxjs/toolkit';
import {Film, FilmInList, PromoFilm} from '../mocks/films';
import {AppRoute, AuthorizationStatus} from '../const';
import {Review} from '../mocks/films-reviews';

export const changeGenre = createAction<string>('changeGenre');
export const setFilms = createAction<FilmInList[]>('setFilms');
export const setSimilarFilms = createAction<FilmInList[]>('setSimilarFilms');
export const setFilm = createAction<Film>('setFilm');
export const setPromoFilm = createAction<PromoFilm>('setPromoFilm');
export const setFavorites = createAction<FilmInList[]>('setFavorites');
export const setFilmComments = createAction<Review[]>('setFilmComments');
export const setFilmsLoadingStatus = createAction<boolean>('setFilmsLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
