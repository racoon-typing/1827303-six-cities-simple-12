import { useState } from 'react';
import CardItem from '../card-item/card-item';
import { ConstructorRoom } from '../../mocks/offers';

type OfferCardsProps = {
  offers: ConstructorRoom[];
};

function CardList({ offers }: OfferCardsProps): JSX.Element {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      {offers.map((offer) => (
        <CardItem
          activeId={activeId}
          key={`${offer.id}-${offer.type}`}
          value={offer}
          onMouseOverHandler={() => setActiveId(offer.id)}
        />
      )
      )}
    </>
  );
}

export default CardList;
