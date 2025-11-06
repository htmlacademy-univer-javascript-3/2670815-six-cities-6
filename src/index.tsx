import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/app';
import { OFFERS } from './mocks/offers';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const OFFERS_COUNT = OFFERS.length;

root.render(
  <React.StrictMode>
    <App
      store={store}
      offersCount={OFFERS_COUNT}
      offers={OFFERS}
    />
  </React.StrictMode>
);
