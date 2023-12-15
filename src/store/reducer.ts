import { changeGenre, setFilms } from './action';
import { Film } from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';

type State = {
  genre: string;
  films: Film[];
};

const initialState: State = {
  genre: '',
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
});
