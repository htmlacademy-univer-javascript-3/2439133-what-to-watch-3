import React, {useState} from 'react';
import {FilmCardsList} from '../../components/film-card';
import {FilmInList} from '../../mocks/films';
import {Details} from '../../mocks/films-details';
import {GenresList} from '../../components/genres-list';
import {useDispatch, useSelector} from 'react-redux';
import {changeGenre} from '../../store/action';
import {State} from '../../store/reducer';
import {Spinner} from '../../components/spinner';
import {AppRoute, AuthorizationStatus} from '../../const';

type PromoFilm = {
  title: string;
  genre: string;
  year: number;
}

export type MainScreenProps = {
  promoFilm: PromoFilm;
  films: FilmInList[];
}

export function MainScreen(props: MainScreenProps) {
  const filmsByGenre = useSelector((state: State) => state.filmsByGenre);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(8);
  const [genre, setGenre] = useState('All genres');

  const handleShow = () => {
    setVisibleCount((x) => x + 8);
  };

  const handleGenreChange = (newGenre: string) => {
    setGenre(newGenre);
    dispatch(changeGenre(newGenre));
    setVisibleCount(8);
  };

  const authorizationStatus = useSelector((state: State) => state.authorizationStatus);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={props.promoFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            {
              authorizationStatus === AuthorizationStatus.Unknown || AuthorizationStatus.NoAuth
                ? <a className="user-block__link" href={AppRoute.SignIn}>Sign in</a>
                : <>
                  <li className="user-block__item">
                    <div className="user-block__avatar">
                      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                    </div>
                  </li>
                  <li className="user-block__item">
                    <a className="user-block__link">Sign out</a>
                  </li>
                </>
            }
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.promoFilm.genre}</span>
                <span className="film-card__year">{props.promoFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList details={Details} currentGenre={genre} onChange={handleGenreChange}/>
          {
            useSelector((state:State) => state.filmsLoadingStatus)
              ? <Spinner />
              : <FilmCardsList films={filmsByGenre.slice(0,visibleCount)}/>
          }

          {
            filmsByGenre.length > visibleCount &&
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={handleShow}>Show more</button>
            </div>
          }
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
