import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import Layuot from '../../components/layuot/layuot';
import { ConstructorRoom } from '../../mocks/offers';


type AppScreenProps = {
  numOfFlat: number;
  offers: ConstructorRoom[];
}

function App({ numOfFlat, offers }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layuot />}>
            <Route index element={<Main numOfFlat={numOfFlat} offers={offers} />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.Offer} element={<Room offers={offers}/>} />
            <Route path={AppRoute.OfferId} element={<Room offers={offers}/>} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
