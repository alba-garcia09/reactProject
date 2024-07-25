import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'slick-carousel/slick/slick-theme.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div>
      <BrowserRouter>
            <AppRouter />
      </BrowserRouter>
    </div>
    </>
)

