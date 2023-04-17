import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import SortOptions from '../../components/sort-options/sort-options';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import CityList from '../../components/city-list/city-list';
import { getData, getOffers, getOffersLoadingStatus } from '../../store/data-process/selectors';
import { getCity } from '../../store/main-process/selectors';
import { changeOfferList } from '../../store/data-process/data-process';


// Redux
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';
import MainEmpty from '../../components/main-empty/main-empty';
import { getErrorStatus } from '../../store/data-process/selectors';


function Main(): JSX.Element {
  const data = useAppSelector(getData);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeOfferList({ cityName: 'Paris' }));
  }, [dispatch, data]);


  // Смена города
  const activeCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const status = useAppSelector(getOffersLoadingStatus);
  const erorrLoading = useAppSelector(getErrorStatus);

  if (offers.length === 0 && erorrLoading) {
    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList activeCity={activeCity} />
          </section>
        </div>
        <MainEmpty activeCity={activeCity} />
      </main>
    );
  }

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
