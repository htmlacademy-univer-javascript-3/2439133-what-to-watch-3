import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {store} from './store';
import {Provider} from 'react-redux';
import {checkAuthAction, fetchFilmsAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const films = store.getState().films;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App mainProps={{
        promoFilm: {
          title:'The Grand Budapest Hotel',
          genre:'Drama',
          year: 2014
        },
        films: films}}
      myListProps={{films: films}}
      playerProps={{films: films}}
      addReviewProps={{films: films}}
      />
    </Provider>
  </React.StrictMode>
);
