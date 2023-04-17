import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CurrentOffer from '../../components/current-offer/current-offer';
import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import NotFound from '../not-found/not-found';
import {
  fetchCurrentOfferAction,
  fetchNearOffersAction,
  fetchCommentAction,
} from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {
  getErrorLoadingOffer,
  getNearOfferLoadingStatus,
  getNearOffers, getOffer, getReviews
} from '../../store/data-process/selectors';


// Redux
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';


function Room(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentOfferAction(id));
    dispatch(fetchNearOffersAction(id));
    dispatch(fetchCommentAction(id));
  }, [dispatch, id]);

  // Получает конкретное предложение
  const currentOffer = useAppSelector(getOffer);

  // Получает статус загрузки предложений неподалеку
  const nearOfferLoadingStatus = useAppSelector(getNearOfferLoadingStatus);

  // Получает предложения неподалеку
  const nearOffer = useAppSelector(getNearOffers);

  // Статус загрузки предложений
  const status = currentOffer && nearOffer;

  // Получает комментарии
  const reviews = useAppSelector(getReviews);

  // Получает ошибку
  const error = useAppSelector(getErrorLoadingOffer);

  if (error) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      <Helmet>
        <title>Старница с предложением номера</title>
      </Helmet>

      {
        status ? (
          <main className="page__main page__main--property">
            <section className="property">
              <CurrentOffer offer={currentOffer} reviews={reviews} roomId={id} />
              <section className="property__map map">
                {!nearOfferLoadingStatus && nearOffer.length !== 0 ? <Map offers={nearOffer} /> : null}
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  {!nearOfferLoadingStatus ? <CardList offers={nearOffer} /> : null}
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
