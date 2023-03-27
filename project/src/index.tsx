import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import { Data } from './mocks/offers';
import { Reviews } from './mocks/reviews';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={Data} reviews={Reviews} />
    </Provider>
  </React.StrictMode>,
);
