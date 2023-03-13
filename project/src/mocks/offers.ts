// export type DataObj = {
//   id: number;
//   main: MainInfo;
//   generalGrade: number;
//   bedrooms: number;
//   adults: number;
//   option: string[];
//   infoHost: Host;
//   reviews: Review[];
// };

// export type MainInfo = {
//   class: string;
//   roomName: string;
//   price: string;
//   type: string;
// };

// export type Host = {
//   owner: string;
//   statusOwner: string;
//   room: string;
// };

// export type Review = {
//   id: number;
//   userName: string;
//   grade: number;
//   text: string;
//   date: string;
// };

// export const Data: DataObj = {
//   id: 1,
//   main: {
//     class: 'Premium',
//     roomName: 'Beautiful & luxurious studio at great location',
//     price: '€120',
//     type: 'Apartment',
//   },
//   generalGrade: 4.8,
//   bedrooms: 3,
//   adults: 4,
//   option: [
//     'Wi-Fi',
//     'Heating',
//     'Kitchen',
//     'Fridge',
//     'Washing machine',
//     'Coffee machine',
//     'Dishwasher',
//     'Towels',
//     'Baby seat',
//     'Cabel TV',
//   ],
//   infoHost: {
//     owner: 'Angelina',
//     statusOwner: 'pro',
//     room: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
//   },
//   reviews: [
//     {
//       id: 1,
//       userName: 'Max',
//       grade: 4,
//       text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
//       date: 'April 2019',
//     }
//   ]
// };


export type TypeRoom = {
  id: number;
  class: string;
  roomName: string;
  price: string;
  type: string;
  grade: number;
}

export const DataRoom: TypeRoom[] = [
  {
    id: 1,
    class: 'Premium',
    roomName: 'Beautiful & luxurious studio at great location',
    price: '€120',
    type: 'Apartment',
    grade: 4,
  },
  {
    id: 2,
    class: 'Comfort',
    roomName: 'Beautiful & luxurious studio at great location',
    price: '€50',
    type: 'Apartment',
    grade: 3,
  },
  {
    id: 3,
    class: 'Premium',
    roomName: 'Beautiful & luxurious studio at great location',
    price: '€150',
    type: 'Apartment',
    grade: 5,
  },
  {
    id: 4,
    class: 'Business',
    roomName: 'Beautiful & luxurious studio at great location',
    price: '€100',
    type: 'Apartment',
    grade: 4.4,
  },
];
