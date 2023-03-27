import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CurrentOffer from '../../components/current-offer/current-offer';
import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import { ConstructorRoom } from '../../types/offer';
import { Review } from '../../types/review';
import {
  // useAppDispatch,
  useAppSelector} from '../../hooks';

type RoomScreenProps = {
  offers: ConstructorRoom[];
  reviews: Review[];
};

function Room({ offers, reviews }: RoomScreenProps): JSX.Element {
  const { id } = useParams();
  const [activeId, setActiveId] = useState(0);
  // const [activeCity, setActiveCity] = useState('Amsterdam');

  const activeCity = useAppSelector((state) => state.city);


  function onMouseOverHandler(cityId: number) {
    setActiveId(cityId);
  }

  const currentOffer = offers.find((item) => {
    const itemId = item.id;
    let result;

    if (itemId === Number(id)) {
      result = itemId;
      return result;
    }

    return result;
  });

  const nearOffer = offers.filter((item) => item.id !== Number(id));

  return (
    <>
      <Helmet>
        <title>Старница с предложением номера</title>
      </Helmet>

      <main className="page__main page__main--property">
        <section className="property">
          <CurrentOffer offer={currentOffer as ConstructorRoom} reviews={reviews} />
          <section className="property__map map">
            {/* <Map offers={nearOffer} city={'Amsterdam'} /> */}
            <Map offers={nearOffer} activeCity={activeCity} selectedPoint={activeId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* <CardList offers={nearOffer} /> */}
              <CardList offers={nearOffer} onMouseOverHandler={onMouseOverHandler} activeId={activeId} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Room;
