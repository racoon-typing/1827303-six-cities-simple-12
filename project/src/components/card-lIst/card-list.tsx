// import { useState } from 'react';
import CardItem from '../card-item/card-item';
import { ConstructorRoom } from '../../types/offer';

type OfferCardsProps = {
  offers: ConstructorRoom[];
  onMouseOverHandler: (id: number) => void;
  activeId: number;
};

function CardList({ offers, onMouseOverHandler, activeId }: OfferCardsProps): JSX.Element {
  // const [activeId, setActiveId] = useState(0);

  return (
    <>
      {offers.map((offer) => (
        <CardItem
          activeId={activeId}
          key={`${offer.id}`}
          value={offer}
          // onMouseOverHandler={(id: number) => setActiveId(id)}
          onMouseOverHandler={onMouseOverHandler}
        />
      )
      )}
    </>
  );
}

export default CardList;
