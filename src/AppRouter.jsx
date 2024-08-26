import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <ProductDetail/>,
        path: '/productDetail/:id',
      },
    ],
  )
}


export default AppRouter;