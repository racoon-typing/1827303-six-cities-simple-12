// export type Review = {
//   id: number;
//   src: string;
//   name: string;
//   rating: number;
//   text: string;
//   time: string;
// }

export type ReviewUser = {
  id: number;
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type Review = {
  id: number;
  user: ReviewUser;
  rating: number;
  comment: string;
  date: string;
}
