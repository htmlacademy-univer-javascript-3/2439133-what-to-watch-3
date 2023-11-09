import {MainScreen, MainScreenProps} from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  mainProps: MainScreenProps;
}
function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainScreen {...props.mainProps}/>}
        />
        <Route
          path="/login"
          element={<SignInScreen/>}
        />
        <Route
          path="mylist"
          element={
            <PrivateRoute isAuthorized={false}>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path="/films/:id"
          element={<MoviePageScreen/>}
        />
        <Route
          path="/films/:id/review"
          element={<AddReviewScreen/>}
        />
        <Route
          path="/player/:id"
          element={<PlayerScreen/>}
        />
        <Route
          path="*"
          element={<PageNotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
