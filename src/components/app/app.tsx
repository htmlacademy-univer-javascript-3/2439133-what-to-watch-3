import {MainScreen} from '../../pages/main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import {Spinner} from '../spinner/spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {State} from '../../types/state';

function App() {
  const authorizationStatus = useSelector((state: State) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <Spinner />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen/>}
        />
        <Route
          path="*"
          element={<PageNotFoundScreen/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
