import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Checkout from './pages/Cart/Checkout.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx';
import LoginPage from './pages/Home/LoginPage.jsx';
import RegisterPage from './pages/Home/RegisterPage.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Cart />,
        path: '/cart',
      },
      {
        element: <Checkout />,
        path: '/checkout',
      },
      {
        element: <ProductDetail/>,
        path: '/productDetail/:id',
      },
      { element: <LoginPage />, path: '/login' },
      { element: <RegisterPage />, path: '/register' },
    ],
  )
}

export default AppRouter;
