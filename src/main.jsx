import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Asegúrate de que el CSS global esté importado
import AppRouter from './AppRouter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
import Header from '../src/components/Header/Header.jsx';
import { CartProvider } from './contexts/CartContext.jsx'

const Pages = styled.main`
  margin-top: 10vh;
  margin-bottom: 5vh;
  height: 85vh;
  overflow-y: auto;
  background-color: white;
  color: black;
  width: 100%;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 5vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
    <Header></Header>
    <Pages>
      <AppRouter />
    </Pages>
    <Footer>
      All rights reserved - alpal
      <i className="bi bi-c-circle" style={{ padding: "0 10px" }}></i>
    </Footer>
    </CartProvider>
  </BrowserRouter>
);
