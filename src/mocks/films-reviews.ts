export type Review = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
};

export type ReviewData = {
  filmId: string;
  comment: string;
  rating: number;
};

// export const Reviews: Review[] = [
//   {
//     id: '1',
//     filmId: '1',
//     rating: '8,9',
//     author: 'Kate Muir',
//     text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
//     date: new Date('24.12.2015')
//   },
//   {
//     id: '2',
//     filmId: '1',
//     rating: '8.0',
//     author: 'Bill Goodykoontz',
//     text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
//     date: new Date('18.11.2015')
//   },
//   {
//     id: '3',
//     filmId: '1',
//     rating: '8.0',
//     author: 'Amanda Greever',
//     text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
//     date: new Date('18.11.2015')
//   },
//   {
//     id: '4',
//     filmId: '1',
//     rating: '7,2',
//     author: 'Matthew Lickona',
//     text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
//     date: new Date('20.12.2016')
//   },
//   {
//     id: '5',
//     filmId: '1',
//     rating: '7,6',
//     author: 'Paula Fleri-Soler',
//     text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
//     date: new Date('20.12.2016')
//   },
//   {
//     id: '6',
//     filmId: '1',
//     rating: '7,0',
//     author: 'Paula Fleri-Soler',
//     text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
//     date: new Date('20.12.2016')
//   }
// ];
