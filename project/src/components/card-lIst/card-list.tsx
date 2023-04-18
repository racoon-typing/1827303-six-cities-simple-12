import CardItem from '../card-item/card-item';
import { ConstructorRoom } from '../../types/offer';

type OfferCardsProps = {
  offers: ConstructorRoom[];
  onMouseOverHandler?: (id: number) => void;

};

function CardList({ offers, onMouseOverHandler }: OfferCardsProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <CardItem
          key={`${offer.id}`}
          value={offer}
          onMouseOverHandler={onMouseOverHandler}
        />
      )
      )}
    </>
  );
}

export default CardList;
