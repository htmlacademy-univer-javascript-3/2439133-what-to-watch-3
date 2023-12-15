import {Films} from './mocks/films';
import {Details} from './mocks/films-details';


export function getFilmsByGenre (genre: string) {
  if (genre === 'All genres') {
    return Films;
  }

  return Films.filter((x) =>
    genre === Details.find((y) => y.filmId === x.id)?.genre);
}
