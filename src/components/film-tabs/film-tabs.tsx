import React from 'react';
import { Review } from '../../types/films-reviews';
import {Film} from '../../types/films';

type OverviewSectionProps = {
  film: Film;
}

type DetailsSectionProps = {
  film: Film;
}

type ReviewsSectionProps = {
  reviews: Review[];
}

type TabsProps = {
  film: Film;
  reviews: Review[];
  setTab: (tabName: string) => void;
  activeTab: string;
}

export function OverviewSection(props: OverviewSectionProps) {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{props.film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{props.film.rating}</span>
          <span className="film-rating__count">{props.film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{props.film.description}</p>

        <p className="film-card__director"><strong>Director: {props.film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {props.film.starring}</strong></p>
      </div>
    </React.Fragment>
  );
}

export function DetailsSection(props: DetailsSectionProps) {
  return(
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{props.film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {props.film.starring}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{props.film.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{props.film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{props.film.released}</span>
        </p>
      </div>
    </div>
  );
}

export function ReviewsSection(props: ReviewsSectionProps) {
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {props.reviews.slice(0, Math.ceil(props.reviews.length / 2)).map((x) => (
          <div className="review" key={x.id}>
            <blockquote className="review__quote">
              <p className="review__text">{x.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{x.user}</cite>
                <time className="review__date" dateTime={x.date.toString()}>{x.date.toString()}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{x.rating}</div>
          </div>))}
      </div>
      <div className="film-card__reviews-col">
        {props.reviews.slice(Math.ceil(props.reviews.length / 2), props.reviews.length).map((x) => (
          <div className="review" key={x.id}>
            <blockquote className="review__quote">
              <p className="review__text">{x.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{x.user}</cite>
                <time className="review__date" dateTime={x.date.toString()}>{x.date.toString()}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{x.rating}</div>
          </div>))}
      </div>
    </div>
  );
}

export function Tabs(props: TabsProps) {
  return (
    <React.Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${props.activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
            <a className="film-nav__link" onClick={() => props.setTab('Overview')}>Overview</a>
          </li>
          <li className={`film-nav__item ${props.activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <a className="film-nav__link" onClick={() => props.setTab('Details')}>Details</a>
          </li>
          <li className={`film-nav__item ${props.activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <a className="film-nav__link" onClick={() => props.setTab('Reviews')}>Reviews</a>
          </li>
        </ul>
      </nav>
      {props.activeTab === 'Overview' && <OverviewSection film={props.film} />}
      {props.activeTab === 'Details' && <DetailsSection film={props.film} />}
      {props.activeTab === 'Reviews' && <ReviewsSection reviews={props.reviews} />}
    </React.Fragment>
  );
}
