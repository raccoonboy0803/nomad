import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Routes } from 'react-router-dom';
import router from './Router';
import Home from './screens/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
