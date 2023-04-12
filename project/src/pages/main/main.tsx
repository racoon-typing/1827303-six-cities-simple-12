import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import SortOptions from '../../components/sort-options/sort-options';
import { changeOfferList } from '../../store/action';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import CityList from '../../components/city-list/city-list';

// Redux
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';

function Main(): JSX.Element {
  const data = useAppSelector((state) => state.data);

  // Начальная фильтрация: город Париж
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeOfferList({ cityName: 'Paris' }));
  }, [dispatch, data]);

  // Смена города
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const status = useAppSelector((state) => state.isOffersLoading);

  return (
    <>
      <Helmet>
        <title>Главная страница: Шесть городов</title>
      </Helmet>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList activeCity={activeCity} />
          </section>
        </div>
        {!status ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>
                <SortOptions />
                <div className="cities__places-list places__list tabs__content">
                  {!status ? (
                    <CardList offers={offers} />
                  ) : (
                    <LoadingScreen />
                  )}
                </div>
              </section>
              <div className='cities__right-section'>
                <section className='cities__map map'>
                  <Map offers={offers} />
                </section>
              </div>
            </div>
          </div>
        ) : (
          <LoadingScreen />
        )}
      </main>
    </>
  );
}

export default Main;
