import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import Layuot from '../../components/layuot/layuot';
import { ConstructorRoom } from '../../types/offer';
import { Review } from '../../types/review';

type AppScreenProps = {
  offers: ConstructorRoom[];
  reviews: Review[];
}

function App({ offers, reviews }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layuot />}>
            <Route index element={<Main offers={offers} />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.OfferId} element={<Room offers={offers} reviews={reviews}/>} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
