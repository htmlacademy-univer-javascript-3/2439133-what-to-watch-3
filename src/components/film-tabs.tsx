import React from 'react';
import { Overview } from '../mocks/films-overviews';
import { Detail } from '../mocks/films-details';
import { Review } from '../mocks/films-reviews';

type OverviewSectionProps = {
  overview: Overview;
}

type DetailsSectionProps = {
  detail: Detail;
}

type ReviewsSectionProps = {
  reviews: Review[];
}

type TabsProps = {
  overview: Overview;
  detail: Detail;
  reviews: Review[];
  setTab: (tabName: string) => void;
  activeTab: string;
}

export function OverviewSection(props: OverviewSectionProps) {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{props.overview.ratingNumber}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{props.overview.ratingLevel}</span>
          <span className="film-rating__count">{props.overview.ratingVotes} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{props.overview.description}</p>

        <p className="film-card__director"><strong>Director: {props.overview.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {props.overview.starring}</strong></p>
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
          <span className="film-card__details-value">{props.detail.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {props.detail.starring}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{props.detail.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{props.detail.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{props.detail.releaseYear}</span>
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
              <p className="review__text">{x.text}</p>

              <footer className="review__details">
                <cite className="review__author">{x.author}</cite>
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
              <p className="review__text">{x.text}</p>

              <footer className="review__details">
                <cite className="review__author">{x.author}</cite>
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
      {props.activeTab === 'Overview' && <OverviewSection overview={props.overview} />}
      {props.activeTab === 'Details' && <DetailsSection detail={props.detail} />}
      {props.activeTab === 'Reviews' && <ReviewsSection reviews={props.reviews} />}
    </React.Fragment>
  );
}
