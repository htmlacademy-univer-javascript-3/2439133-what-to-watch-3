import {Film} from './mocks/films';

export function getFilmsByGenre (genre: string, films: Film[]) {
  if (genre === 'All genres') {
    return films;
  }

  return films.filter((x) =>
    genre === x.genre);
}
