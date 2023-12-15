import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Films} from './mocks/films';
import {store} from './store';
import {Provider} from 'react-redux';

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
        films: Films}}
      myListProps={{films: Films}}
      playerProps={{films: Films}}
      addReviewProps={{films: Films}}
      />
    </Provider>
  </React.StrictMode>
);
