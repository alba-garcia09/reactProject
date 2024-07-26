import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Header = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: black;
  color: white;
`;

const Pages = styled.header`
  width: 100vw;
  height: 85vh;
  background-color: blue;
  color: black;
`;


const Footer = styled.header`
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
        <Pages> Mi pagina principal
          {/* <AppRouter /> */}
        </Pages>
        <Footer> Estoy en el footer</Footer>
      </BrowserRouter>
    </div>
  </>
)
