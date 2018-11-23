import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from '../viewes/App';
import configureStore, { persistor } from '../store';

const store = configureStore(window.REDUX_DATA);

const jsx = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

const app = document.getElementById('root');
ReactDOM.hydrate(jsx, app);
