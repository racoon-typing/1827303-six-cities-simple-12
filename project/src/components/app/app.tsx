import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts/consts';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import Layuot from '../../components/layuot/layuot';
import { ConstructorRoom } from '../../types/offer';
import { Review } from '../../types/review';

// Redux
import {
  useAppSelector
} from '../../hooks';


type AppScreenProps = {
  offers: ConstructorRoom[];
  reviews: Review[];
}

function App({ offers, reviews }: AppScreenProps): JSX.Element {

  // Смена города
  const activeCity = useAppSelector((state) => state.city);

  const filterOffers = offers.filter((оffer) => {
    const newOffers = оffer.city.name === activeCity;
    return newOffers;
  });

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layuot />}>
            <Route index element={<Main offers={filterOffers} />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.OfferId} element={<Room offers={filterOffers} reviews={reviews} />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
