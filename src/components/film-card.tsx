import {Film} from '../mocks/films';
import {AppRoute} from '../const';
import {MouseEventHandler, useState} from 'react';

type FilmCardProps = {
  film: Film;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
}

type FilmCardsListProps = {
  films: Film[];
}
export function FilmCard(props: FilmCardProps) {
  const film = props.film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.image} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={`${AppRoute.Film.replace(':id', film.id)}`}>{film.title}</a>
      </h3>
    </article>
  );
}

export function FilmCardsList(props: FilmCardsListProps){
  const films = props.films;
  const [, setActive] = useState<Film | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onMouseEnter={() => setActive(film)}
          onMouseLeave={() => setActive(null)}
        />
      ))}
    </div>
  );
}
