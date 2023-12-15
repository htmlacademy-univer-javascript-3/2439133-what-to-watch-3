export type Overview = {
  filmId: string;
  ratingNumber: string;
  ratingLevel: string;
  ratingVotes: string;
  description: string;
  director: string;
  starring: string;
}

export const Overviews: Overview[] = [
  {
    filmId: '1',
    ratingNumber: '8.9',
    ratingLevel: 'Very good',
    ratingVotes: '240',
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and proteg Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying
                  the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies
                  mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
                  murder.`,
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other'
  },
  {
    filmId: '2',
    ratingNumber: '8.9',
    ratingLevel: 'Very good',
    ratingVotes: '240',
    description: 'Amazing film',
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other'
  },
  {
    filmId: '3',
    ratingNumber: '8.9',
    ratingLevel: 'Very good',
    ratingVotes: '240',
    description: 'Film description',
    director: 'Wes Anderson',
    starring: 'Starring people'
  },
  {
    filmId: '4',
    ratingNumber: '10',
    ratingLevel: 'Very good',
    ratingVotes: '24000',
    description: 'In the 1930s .....',
    director: 'Wes',
    starring: 'People'
  },
  {
    filmId: '5',
    ratingNumber: '9',
    ratingLevel: 'So good',
    ratingVotes: '24000',
    description: 'Blablabla',
    director: 'Boo',
    starring: 'Foo'
  },
  {
    filmId: '6',
    ratingNumber: '3',
    ratingLevel: 'Bad',
    ratingVotes: '42',
    description: 'BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla',
    director: 'John',
    starring: 'Guys'
  },
  {
    filmId: '7',
    ratingNumber: '1',
    ratingLevel: 'Very bad',
    ratingVotes: '55',
    description: 'LalalaLalalaLalalaLalalaLalalaLalalaLalalaLalala',
    director: 'Bill',
    starring: 'Others'
  },
  {
    filmId: '8',
    ratingNumber: '10',
    ratingLevel: 'Very good',
    ratingVotes: '36',
    description: 'NanaNanaNanaNanaNanaNanaNanaNanaNanaNanaNanaNanaNanaNana',
    director: 'Frank',
    starring: 'People'
  },
];
