import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import NavMain from '../../components/nav-main/nav-main';
import SortOptions from '../../components/sort-options/sort-options';
import { changeOfferList } from '../../store/action';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';

// Redux
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';

const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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
            <ul className="locations__list tabs__list">
              {Cities.map((city, id) => (
                <li className="locations__item" key={`${id * 10}-city`}>
                  <NavMain value={city} activeCity={activeCity} />
                </li>
              ))}
            </ul>
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
