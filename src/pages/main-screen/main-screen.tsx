import React, {useState} from 'react';
import {FilmCardsList} from '../../components/film-card';
import {Details} from '../../mocks/films-details';
import {GenresList} from '../../components/genres-list';
import {useSelector} from 'react-redux';
import {changeGenre} from '../../store/action';
import {State} from '../../store/reducer';
import {Spinner} from '../../components/spinner';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../appDispatch';

export function MainScreen() {
  const filmsByGenre = useSelector((state: State) => state.filmsByGenre);
  const promoFilm = useSelector((state: State) => state.promoFilm);
  const dispatch = useAppDispatch();
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

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const authorizationStatus = useSelector((state: State) => state.authorizationStatus);

  const userData = useSelector((state: State) => state.userData);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link" href={AppRoute.Main}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            {
              authorizationStatus === AuthorizationStatus.Unknown || authorizationStatus === AuthorizationStatus.NoAuth
                ? <a className="user-block__link" href={AppRoute.SignIn}>Sign in</a>
                :
                <>
                  <li className="user-block__item">
                    <div className="user-block__avatar">
                      <img src={userData?.avatarUrl} alt="User avatar" width="63" height="63" />
                    </div>
                  </li>
                  <li className="user-block__item">
                    <a className="user-block__link" onClick={handleLogout}>Sign out</a>
                  </li>
                </>
            }
          </ul>
        </header>
        {
          promoFilm === undefined
            ? <Spinner/>
            :
            <div className="film-card__wrap">
              <div className="film-card__info">
                <div className="film-card__poster">
                  <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
                </div>

                <div className="film-card__desc">
                  <h2 className="film-card__title">{promoFilm?.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{promoFilm?.genre}</span>
                    <span className="film-card__year">{promoFilm?.released}</span>
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
        }

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
            <a className="logo__link logo__link--light" href={AppRoute.Main}>
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
