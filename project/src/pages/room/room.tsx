import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CurrentOffer from '../../components/current-offer/current-offer';
import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import { ConstructorRoom } from '../../types/offer';
import { Review } from '../../types/review';
import { fetchCurrentOfferAction, fetchNearOffersAction } from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';

// import { store } from '../../store';

// Redux
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';
import { useEffect } from 'react';


type RoomScreenProps = {
  reviews: Review[];
};

function Room({ reviews }: RoomScreenProps): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentOfferAction(id));
    dispatch(fetchNearOffersAction(id));
  }, [dispatch, id]);

  // Получает конкретное предложение
  const currentOffer = useAppSelector((state) => state.getOffer);


  // const nearOffer = offers.filter((item) => item.id !== Number(id));

  return (
    <>
      <Helmet>
        <title>Старница с предложением номера</title>
      </Helmet>
      {
        currentOffer ? (
          <main className="page__main page__main--property">
            <section className="property">
              <CurrentOffer offer={currentOffer as ConstructorRoom} reviews={reviews} />
              <section className="property__map map">
                {/* <Map offers={nearOffer} /> */}
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  {/* <CardList offers={nearOffer} /> */}
                </div>
              </section>
            </div>
          </main>
        ) : (
          <LoadingScreen />
        )
      }
    </>
  );
}

export default Room;
