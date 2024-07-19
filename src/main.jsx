import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter.jsx'
import Header from './components/Header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div>
      <BrowserRouter>
    <Header></Header>
        <AppRouter />
      </BrowserRouter>
    </div>
    </>
)

