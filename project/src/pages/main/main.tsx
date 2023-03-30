import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import NavMain from '../../components/nav-main/nav-main';
import SortOptions from '../../components/sort-options/sort-options';
import { changeOfferList } from '../../store/action';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

// Redux
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';

const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function Main(): JSX.Element {
  // Смена города
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  // Начальная фильтрация: город Париж
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeOfferList({ cityName: 'Paris' }));
  }, []);

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
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <SortOptions />
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={offers} />
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map offers={offers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
