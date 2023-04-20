import CardList from '../../components/card-lIst/card-list';
import Map from '../../components/map/map';
import SortOptions from '../../components/sort-options/sort-options';
import { Helmet } from 'react-helmet-async';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import CityList from '../../components/city-list/city-list';
import { getOffers, getOffersLoadingStatus } from '../../store/data-process/selectors';
import { getCity } from '../../store/main-process/selectors';


// Redux
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';
import MainEmpty from '../../components/main-empty/main-empty';
import { getErrorStatus } from '../../store/data-process/selectors';
import { hoverCity } from '../../store/main-process/main-process';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  // Смена города
  const activeCity = useAppSelector(getCity);
  // Получает список предложений
  const offers = useAppSelector(getOffers);
  // Статус загрузки предложений
  const status = useAppSelector(getOffersLoadingStatus);
  // Получает ошибку при загрузке
  const erorrLoading = useAppSelector(getErrorStatus);

  // Функция смены ID наведенного города
  function onMouseOverHandler(id: number) {
    dispatch(hoverCity({ hoveredCity: id }));
  }

  // Функция обнуления ID при уходе курсора с элемента
  function onMouseOutHandler() {
    dispatch(hoverCity({ hoveredCity: 0 }));
  }

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
                    <CardList offers={offers} onMouseOverHandler={onMouseOverHandler}
                      onMouseOutHandler={onMouseOutHandler}
                    />
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
