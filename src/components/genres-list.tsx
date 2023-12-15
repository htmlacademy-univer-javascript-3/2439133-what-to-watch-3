import {Detail} from '../mocks/films-details';


type GenresListProps = {
  details: Detail[];
  currentGenre: string;
  onChange: (genre: string) => void;
}

export function GenresList (props: GenresListProps) {
  const genresFromFilms = new Set(props.details.map((detail) => detail.genre));
  const genres = ['All genres', ...genresFromFilms];
  return (
    <ul className="catalog__genres-list">
      {genres.map((x) => (
        <li key={x} className={`catalog__genres-item ${x === props.currentGenre ? 'catalog__genres-item--active' : ''}`}>
          <button className="catalog__genres-link" onClick={() => props.onChange(x)}>{x}</button>
        </li>
      ))}
    </ul>
  );
}
