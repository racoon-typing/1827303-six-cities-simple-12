import { system, datatype, name, address, lorem, random } from 'faker';
import { ConstructorRoom } from '../types/offer';

export const makeFakeOfferList = (): ConstructorRoom[] => new Array(3).fill(null).map((): ConstructorRoom => (
  {
    bedrooms: datatype.number(),
    city: {
      location: {
        latitude: Number(address.latitude()),
        longitude: Number(address.longitude()),
        zoom: datatype.number(),
      },
      name: address.city(),
    },
    description: lorem.text(),
    goods: [random.locale(), random.locale(), random.locale()],
    host: {
      avatarUrl: system.filePath(),
      id: datatype.number(),
      isPro: true,
      name: name.firstName(),
    },
    id: datatype.number(),
    images: [system.filePath(), system.filePath(), system.filePath()],
    isPremium: true,
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: datatype.number(10),
    },
    maxAdults: datatype.number(10),
    previewImage: system.filePath(),
    price: datatype.number(),
    rating: datatype.number(5),
    title: random.locale(),
    type: random.locale(),
  }
));
