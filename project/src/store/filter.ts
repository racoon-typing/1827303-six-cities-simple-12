import { ConstructorRoom } from '../types/offer';

export const filterOffers = (someOffers: ConstructorRoom[], cityName: string): ConstructorRoom[] => {
  return someOffers.filter((someOffer) => someOffer.city.name === cityName);
};

