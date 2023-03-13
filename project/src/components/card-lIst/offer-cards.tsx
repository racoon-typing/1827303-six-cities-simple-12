// import { useState } from 'react';
import CitiesCard from '../cities-card/cities-card';
import { TypeRoom } from '../../mocks/offers';

type OfferCardsProps = {
  rooms: TypeRoom[];
};

function OfferCards({ rooms }: OfferCardsProps): JSX.Element {
  // console.log(rooms);

  return (
    <>
      {rooms.map((room, id) =>
        <CitiesCard key={room.id} value={room} />
      )}
    </>
  );
}

export default OfferCards;
