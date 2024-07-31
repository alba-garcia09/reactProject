import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Header from '../src/components/Header/Header.jsx'

// const Header = styled.header`
//   width: 100vw;
//   height: 10vh;
//   background-color: black;
//   color: white;
// `;

const Pages = styled.main`
  width: 100vw;
  height: 85vh;
  background-color: white;
  color: black;
`;

const Footer = styled.footer`
  width: 100vw;
  height: 5vh;
  background-color: black;
  color: white;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div>
      <BrowserRouter>
        <Header> Estoy en el Header</Header>
        <Pages>
          <AppRouter />
        </Pages>
        <Footer> Estoy en el footer</Footer>
      </BrowserRouter>
    </div>
  </>
)

