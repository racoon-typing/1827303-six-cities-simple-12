import CitiesCard from '../cities-card/cities-card';
import { TypeRoom } from '../../mocks/offers';

type OfferCardsProps = {
  rooms: TypeRoom[];
};

function OfferCards({ rooms }: OfferCardsProps): JSX.Element {
  // console.log(rooms);

  return (
    <ul>
      {rooms.map((room) =>
        <CitiesCard key={room.id} value={room}/>
      )}
    </ul>
  );
}

export default OfferCards;
