import {MainScreen, MainScreenProps} from '../../pages/main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen, {MyListScreenProps} from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen, {AddReviewScreenProps} from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen, {PlayerScreenProps} from '../../pages/player-screen/player-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import {State} from '../../store/reducer';
import {Spinner} from '../spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

type AppProps = {
  mainProps: MainScreenProps;
  myListProps: MyListScreenProps;
  playerProps: PlayerScreenProps;
  addReviewProps: AddReviewScreenProps;
}
function App(props: AppProps) {
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
          element={<MainScreen {...props.mainProps}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListScreen {...props.myListProps}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen {...props.addReviewProps}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen {...props.playerProps}/>}
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
