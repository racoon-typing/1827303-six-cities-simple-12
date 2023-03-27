import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import NavMain from '../../components/nav-main/nav-main';
import { Helmet } from 'react-helmet-async';
import { ConstructorRoom } from '../../types/offer';
import { useState } from 'react';
// Redux
import {
  // useAppDispatch,
  useAppSelector} from '../../hooks';

type MainScreenProps = {
  offers: ConstructorRoom[];
};


const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];


function Main({ offers }: MainScreenProps): JSX.Element {
  const [activeId, setActiveId] = useState(0);
  // Замена
  const activeCity = useAppSelector((state) => state.city);
  // console.log(activeCity);
  // const dispatch = useAppDispatch();

  // console.log(needOffers);
  // dispatch(filterCities(needOffers, activeCity));
  // const someOffers = useAppSelector((state) => state.offers);
  // console.log(someoffers);


  function onMouseOverHandler(id: number) {
    setActiveId(id);
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {/* <CardList offers={someOffers} onMouseOverHandler={onMouseOverHandler} activeId={activeId}/> */}
              </div>
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                {/* <Map offers={someOffers} activeCity={activeCity} selectedPoint={activeId}/> */}
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
