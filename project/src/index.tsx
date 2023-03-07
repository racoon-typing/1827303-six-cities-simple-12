// import { type } from 'os';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

type FlatPops = {
  numOfFlat: number;
}


const FlatObj: FlatPops = {
  numOfFlat: 115,
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App numOfFlat={FlatObj.numOfFlat}/>
  </React.StrictMode>,
);
