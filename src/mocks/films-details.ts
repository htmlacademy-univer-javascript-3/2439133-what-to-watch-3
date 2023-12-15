export type Detail = {
  filmId: string;
  director: string;
  starring: string;
  runTime: string;
  genre: string;
  releaseYear: string;
}

export const Details: Detail[] = [
  {
    filmId: '1',
    genre: 'Comedy',
    releaseYear:  '2014',
    director: 'Wes Anderson',
    starring: 'Bill Murray, \n Edward Norton, \n Jude Law, \n Willem Dafoe, \n Saoirse Ronan, \n Tony Revoloru, \n Tilda Swinton, \n Tom Wilkinson, \n Owen Wilkinson, \n Adrien Brody, \n Ralph Fiennes, \n Jeff Goldblum',
    runTime: '1h 39m'
  },
  {
    filmId: '2',
    genre: 'Comedy',
    releaseYear: '2016',
    director: 'Director',
    starring: 'guys',
    runTime: '1h'
  },
  {
    filmId: '3',
    genre: 'Comedy',
    releaseYear: '2010',
    director: 'Wes Anderson',
    starring: 'guys',
    runTime: '1h 39m'
  },
  {
    filmId: '4',
    genre: 'Drama',
    releaseYear: '2007',
    director: 'Blalla',
    starring: 'Blabla',
    runTime: '2h'
  },
  {
    filmId: '5',
    genre: 'Comedy',
    releaseYear: '2011',
    director: 'Wes Anderson',
    starring: 'lalalal',
    runTime: '3h'
  },
  {
    filmId: '6',
    genre: 'Comedy',
    releaseYear: '2012',
    director: 'Wes',
    starring: 'guys',
    runTime: '2h 39m'
  },
  {
    filmId: '7',
    genre: 'Comedy',
    releaseYear: '2020',
    director: 'Tom',
    starring: 'guys',
    runTime: '1h 57m'
  },
  {
    filmId: '8',
    genre: 'Comedy',
    releaseYear: '2021',
    director: 'Rick',
    starring: 'guys',
    runTime: '2h 42m'
  }
];
