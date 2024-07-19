
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import LoginPage from './pages/Home/LoginPage';
import RegisterPage from './pages/Home/RegisterPage';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
    ],
  )
    {
      element: <LoginPage />,
      path: '/login',
    },
    {
      element: <RegisterPage />,
      path: '/register',
    },
  
  ]);
}

export default AppRouter;
