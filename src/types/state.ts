import {Film, FilmInList, PromoFilm} from './films';
import {Review} from './films-reviews';
import {AuthorizationStatus} from '../const';
import {UserData} from './user-data';
import {store} from '../store';
import {useDispatch} from 'react-redux';

export type State = {
  genre: string;
  filmsByGenre: FilmInList[];
  films: FilmInList[];
  favorites: FilmInList[];
  similarFilms: FilmInList[];
  currentFilm?: Film;
  promoFilm?: PromoFilm;
  filmComments: Review[];
  filmsLoadingStatus: boolean;
  authorizationStatus: AuthorizationStatus;
  userData?: UserData;
};
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
