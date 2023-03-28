// import { useState } from 'react';
import CardItem from '../card-item/card-item';
import { ConstructorRoom } from '../../types/offer';

type OfferCardsProps = {
  offers: ConstructorRoom[];
  onMouseOverHandler: (id: number) => void;
  activeId: number;
};

function CardList({ offers, onMouseOverHandler, activeId }: OfferCardsProps): JSX.Element {

  return (
    <>
      {offers.map((offer, id) => (
        <CardItem
          activeId={activeId}
          key={`${offer.id}`}
          value={offer}
          itemId={id}
          onMouseOverHandler={onMouseOverHandler}
        />
      )
      )}
    </>
  );
}

export default CardList;
