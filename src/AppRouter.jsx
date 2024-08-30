// src/AppRouter.jsx
import { useRoutes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/Home/LoginPage';
import RegisterPage from './pages/Home/RegisterPage';
import ProductsPage from './pages/Products/ProductsPage';

function AppRouter() {
  const location = useLocation();

  const routes = useRoutes([
    { element: <Home />, path: '/' },
    { element: <LoginPage />, path: '/login' },
    { element: <RegisterPage />, path: '/register' },
    { element: <ProductsPage />, path: '/products' },
  ]);

  return (
      <>
        {routes}
      </>
  );
}

export default AppRouter;
