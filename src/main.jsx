import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import './styles/tailwind.css';
import './styles/globals.css';
import './styles/glass.css';
import { router } from './routes/router';
import { store } from './state/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
