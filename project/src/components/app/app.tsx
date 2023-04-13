import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts/consts';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import Layuot from '../../components/layuot/layuot';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../browser-history/browser-history';


function App(): JSX.Element {

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Layuot />}>
            <Route index element={<Main />} />
            {/* <Route path={AppRoute.Login} element={<Login />} /> */}
            <Route path={AppRoute.OfferId} element={<Room />} />
            {/* <Route path={AppRoute.NotFound} element={<NotFound />} /> */}
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider >
  );
}

export default App;
