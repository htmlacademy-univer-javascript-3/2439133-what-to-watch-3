export type FilmInList = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type Film = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type PromoFilm = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

// export const Films: Film[] = [
//   {
//     id : '1',
//     image : 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
//     bgImage : 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
//     title: 'Fantastic Beasts: The Crimes of Grindelwald',
//     video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id : '2',
//     image : 'img/bohemian-rhapsody.jpg',
//     bgImage : 'img/bohemian-rhapsody.jpg',
//     title: 'Bohemian Rhapsody',
//     video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id : '3',
//     image : 'img/macbeth.jpg',
//     bgImage : 'img/macbeth.jpg',
//     title: 'Macbeth',
//     video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id : '4',
//     image : 'img/aviator.jpg',
//     bgImage : 'img/aviator.jpg',
//     title: 'Aviator',
//     video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id : '5',
//     image : 'img/we-need-to-talk-about-kevin.jpg',
//     bgImage : 'img/we-need-to-talk-about-kevin.jpg',
//     title: 'We need to talk about Kevin',
//     video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id : '6',
//     image : 'img/what-we-do-in-the-shadows.jpg',
//     bgImage : 'img/what-we-do-in-the-shadows.jpg',
//     title: 'What We Do in the Shadows',
//     video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id : '7',
//     image : 'img/revenant.jpg',
//     bgImage : 'img/revenant.jpg',
//     title: 'Revenant',
//     video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   },
//   {
//     id : '8',
//     image : 'img/johnny-english.jpg',
//     bgImage : 'img/johnny-english.jpg',
//     title: 'Johnny English',
//     video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
//   }
// ];
