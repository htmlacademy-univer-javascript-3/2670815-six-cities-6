import React from 'react';
import ReactDOM from 'react-dom/client';
import MainScreen from './pages/main-screen/main-screen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainScreen />
  </React.StrictMode>
);
