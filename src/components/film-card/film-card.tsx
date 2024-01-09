import {FilmInList} from '../../types/films';
import {AppRoute} from '../../const';
import {useState, useRef, memo} from 'react';
import {VideoPlayer} from '../video-player/video-player';

type FilmCardProps = {
  film: FilmInList;
}

type FilmCardsListProps = {
  films: FilmInList[];
}
function FilmCardComponent(props: FilmCardProps) {
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

const FilmCard = memo(FilmCardComponent, (prevProps, nextProps) => prevProps.film.id === nextProps.film.id);

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
