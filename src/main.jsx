import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter.jsx'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { CartProvider } from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>

  </>
)

