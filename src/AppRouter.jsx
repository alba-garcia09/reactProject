// src/AppRouter.jsx
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import LoginPage from './pages/Home/LoginPage';
import RegisterPage from './pages/Home/RegisterPage';
import PageTransition from './components/PageTransition';

function AppRouter() {
  const location = useLocation();

  const routes = useRoutes([
    { element: <Home />, path: '/' },
    { element: <LoginPage />, path: '/login' },
    { element: <RegisterPage />, path: '/register' },
  ]);

  return (
    // Wrap routes with AnimatePresence to handle exit animations
    <AnimatePresence>
      {/* Wrap the routes with PageTransition to handle animations */}
      <PageTransition>
        {routes}
      </PageTransition>
    </AnimatePresence>
  );
}

export default AppRouter;
