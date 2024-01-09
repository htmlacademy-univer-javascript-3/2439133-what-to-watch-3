import {FilmInList} from './mocks/films';

export function getFilmsByGenre (genre: string, films: FilmInList[]) {
  if (genre === 'All genres') {
    return films;
  }

  return films.filter((x) =>
    genre === x.genre);
}
