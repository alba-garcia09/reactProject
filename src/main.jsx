import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <pages>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </pages>
    </>
)

