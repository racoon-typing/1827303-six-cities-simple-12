import CardItem from '../card-item/card-item';
import { ConstructorRoom } from '../../types/offer';

type OfferCardsProps = {
  offers: ConstructorRoom[];
};

function CardList({ offers }: OfferCardsProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <CardItem
          key={`${offer.id}`}
          value={offer}
        />
      )
      )}
    </>
  );
}

export default CardList;
