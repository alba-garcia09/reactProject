import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';

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
    ],
  )
}


export default AppRouter;