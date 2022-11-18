import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import formReducer from './features/form';
import authReducer from './features/authenticate';
import playerReducer from './features/player';
import { BrowserRouter } from 'react-router-dom';

export const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
    player: playerReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode >
);

