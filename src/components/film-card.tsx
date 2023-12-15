import {Film} from '../mocks/films';
import {AppRoute} from '../const';
import {useState, useRef} from 'react';
import {VideoPlayer} from './video-player';

type FilmCardProps = {
  film: Film;
}

type FilmCardsListProps = {
  films: Film[];
}
export function FilmCard(props: FilmCardProps) {
  const film = props.film;
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => setIsPlaying(true), 1000);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        {isPlaying ? (
          <VideoPlayer src={film.previewVideoLink} muted width="280" height="175" poster={film.previewImage} autoplay />)
          : (<img src={film.previewImage} alt={film.name} width="280" height="175" />)}
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={`${AppRoute.Film.replace(':id', film.id)}`}>{film.name}</a>
      </h3>
    </article>
  );
}

export function FilmCardsList(props: FilmCardsListProps){
  const films = props.films;

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}
