import { createAction } from '@reduxjs/toolkit';
import {Film} from '../mocks/films';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeGenre = createAction<string>('changeGenre');
export const setFilms = createAction<Film[]>('setFilms');
export const setFilmsLoadingStatus = createAction<boolean>('setFilmsLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
