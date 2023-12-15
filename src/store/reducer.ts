import { changeGenre } from './action';
import {Film, Films} from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import {getFilmsByGenre} from '../getFilmsByGenre';

export type State = {
  genre: string;
  filmsByGenre: Film[];
};

const initialState: State = {
  genre: 'All genres',
  filmsByGenre: Films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsByGenre = getFilmsByGenre(action.payload);
    });
});
