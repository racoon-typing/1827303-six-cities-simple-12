import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AppRoute} from '../../consts';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import Layuot from '../../components/layuot/layuot';

type AppScreenProps = {
  numOfFlat: number;
}

function App({ numOfFlat }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layuot />}>
          <Route index element={<Main numOfFlat={numOfFlat} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer}>
            <Route index element={<Room />} />
            <Route path=':id' element={<Room />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
