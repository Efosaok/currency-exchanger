import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Details from './views/Details';
import Home from './views/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'details/:id',
    element: <Details />,
  },
]);

export default router;
