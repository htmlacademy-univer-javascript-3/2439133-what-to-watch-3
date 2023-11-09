import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Films} from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
