import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CurrentOffer from '../../components/current-offer/current-offer';
import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import {
  fetchCurrentOfferAction,
  fetchNearOffersAction,
  fetchCommentAction
} from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
// import { Review } from '../../types/review';
// import NotFound from '../not-found/not-found';

// Redux
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';


// type RoomScreenProps = {
//   reviews: Review[];
// };

function Room(
//   {
//   // reviews
// }: RoomScreenProps
): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentOfferAction(id));
    dispatch(fetchNearOffersAction(id));
    // dispatch(fetchCommentAction(id));
  }, [dispatch, id]);

  // Получает конкретное предложение
  const currentOffer = useAppSelector((state) => state.getOffer);

  // Получает предложения неподалеку
  const nearOffer = useAppSelector((state) => state.nearOffers);

  // Статус загрузки предложений
  const status = currentOffer && nearOffer;

  const reviews = useAppSelector((state) => state.reviews);
  // if (Number(id) !== currentOffer?.id) {
  //   return (
  //     <NotFound />
  //   );
  // }

  // const status = !currentStatus && !nearStatus;

  return (
    <>
      <Helmet>
        <title>Старница с предложением номера</title>
      </Helmet>

      {
        status ? (
          <main className="page__main page__main--property">
            <section className="property">
              <CurrentOffer offer={currentOffer} reviews={reviews} />
              <section className="property__map map">
                {
                  nearOffer.length === 0 ? (
                    null
                  ) : (
                    <Map offers={nearOffer} />
                  )
                }
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <CardList offers={nearOffer} />
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
