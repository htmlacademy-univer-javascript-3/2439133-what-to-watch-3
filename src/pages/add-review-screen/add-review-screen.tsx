import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import {useEffect} from 'react';
import {getFilmAction, logoutAction} from '../../store/api-actions';
import {useSelector} from 'react-redux';
import {Spinner} from '../../components/spinner/spinner';
import {State, useAppDispatch} from '../../types/state';

function AddReviewScreen() {
  const {id} = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilmAction(id ?? ''));
  },[id, dispatch]);

  const film = useSelector((state:State) => state.currentFilm);

  const userInfo = useSelector((state:State) => state.userData);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  if(id === undefined){
    return <Spinner/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.posterImage} alt={film?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film.replace(':id', id ?? '')}`} className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src={userInfo?.avatarUrl} alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" onClick={handleLogout}>Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm filmId={id} />
      </div>

    </section>
  );
}

export default AddReviewScreen;
