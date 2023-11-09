import React from 'react';
import FilmCard from '../../components/film-card';

type PromoFilm = {
  title: string;
  genre: string;
  year: number;
}

export type MainScreenProps = {
  promoFilm: PromoFilm;
}

export function MainScreen(props: MainScreenProps) {
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
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
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

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard image="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" title="Fantastic Beasts: The Crimes of Grindelwald" link="film-page.html"/>
            <FilmCard image="img/bohemian-rhapsody.jpg" title="Bohemian Rhapsody" link="film-page.html"/>
            <FilmCard image="img/macbeth.jpg" title="Macbeth" link="film-page.html"/>
            <FilmCard image="img/aviator.jpg" title="Aviator" link="film-page.html"/>

            <FilmCard image="img/we-need-to-talk-about-kevin.jpg" title="We need to talk about Kevin" link="film-page.html"/>
            <FilmCard image="img/what-we-do-in-the-shadows.jpg" title="What We Do in the Shadows" link="film-page.html"/>
            <FilmCard image="img/revenant.jpg" title="Revenant" link="film-page.html"/>
            <FilmCard image="img/johnny-english.jpg" title="Johnny English" link="film-page.html"/>

            <FilmCard image="img/shutter-island.jpg" title="Shutter Island" link="film-page.html"/>
            <FilmCard image="img/pulp-fiction.jpg" title="Pulp Fiction" link="film-page.html"/>
            <FilmCard image="img/no-country-for-old-men.jpg" title="No Country for Old Men" link="film-page.html"/>
            <FilmCard image="img/snatch.jpg" title="Snatch" link="film-page.html"/>

            <FilmCard image="img/moonrise-kingdom.jpg" title="Moonrise Kingdom" link="film-page.html"/>
            <FilmCard image="img/seven-years-in-tibet.jpg" title="Seven Years in Tibet" link="film-page.html"/>
            <FilmCard image="img/midnight-special.jpg" title="Midnight Special" link="film-page.html"/>
            <FilmCard image="img/war-of-the-worlds.jpg" title="War of the Worlds" link="film-page.html"/>

            <FilmCard image="img/dardjeeling-limited.jpg" title="Dardjeeling Limited" link="film-page.html"/>
            <FilmCard image="img/orlando.jpg" title="Orlando" link="film-page.html"/>
            <FilmCard image="img/mindhunter.jpg" title="Mindhunter" link="film-page.html"/>
            <FilmCard image="img/midnight-special.jpg" title="Midnight Special" link="film-page.html"/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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