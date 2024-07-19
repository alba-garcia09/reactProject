import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import Register from './pages/Register/Register.jsx'


function AppRouter() {
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Register />,
        path: '/register',
      }
    ],
  )
}


export default AppRouter;