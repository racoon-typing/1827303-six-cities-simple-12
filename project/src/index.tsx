import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Data } from './mocks/offers';
import { Reviews } from './mocks/reviews';

type indexProps = {
  numOfFlat: number;
}

const Setiings: indexProps = {
  numOfFlat: 115,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App numOfFlat={Setiings.numOfFlat} offers={Data} reviews={Reviews} />
  </React.StrictMode>,
);
