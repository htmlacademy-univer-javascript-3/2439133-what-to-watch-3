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
