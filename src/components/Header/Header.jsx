import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo.js';
import MyButton from '../ButtonInHeader/MyButton.js';
import styled from 'styled-components';
import RegisterIcon from '../../assets/register.png';
import CartIcon from '../../assets/cart.png';
import SearchIcon from '../../assets/search.png';

const HeaderStyled = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-sizing: border-box;
  position: relative; /* Add position relative for absolute positioning of the panel */
`;

const ProductNavigationPanel = styled.div`
  width: 100vw; /* 100% del ancho de la ventana gráfica */
  height: 7.5vh; /* 1% de la altura de la ventana gráfica */
  background-color: #0A3E27;
  color: white
  display: flex;
  align-items: center;
  padding: 20px 50px; /* Adjust padding */
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 0 20px;
  padding: 10px 0;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px 30px 5px 10px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #ccc;
`;

const SearchIconStyled = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const ProductItem = styled.li`
  margin: 0 10px;
  cursor: pointer;
  list-style-type: none; /* Remove default list style */
`;

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  return (
    <>
      <HeaderStyled>
        <Logo />

        <InputContainer>
          <InputStyled
            placeholder="Buscar..."
            onChange={(event) => setSearch(event.target.value)}
          />
          <SearchIconStyled
            src={SearchIcon}
            alt="Search"
            onClick={() => navigate(`/filter/${search}`)}
          />
        </InputContainer>
        <ButtonContainer>
          <MyButton>
            <Icon
              src={RegisterIcon}
              alt="Register"
              onClick={() => navigate('/register')}
            />
          </MyButton>
          <MyButton>
            <Icon
              src={CartIcon}
              alt="Cart"
              onClick={() => navigate('/cart')}
            />
          </MyButton>
        </ButtonContainer>
      </HeaderStyled>

      <ProductNavigationPanel>
        <ProductItem onClick={() => navigate('/car/filter/shirt')} >Shirt</ProductItem>
        <ProductItem onClick={() => navigate('/car/filter/jeans')}>Jeans</ProductItem>
        <ProductItem onClick={() => navigate('/car/filter/skirt')}>Skirt</ProductItem>
        <ProductItem onClick={() => navigate('/car/filter/socks')}>Socks</ProductItem>
        <ProductItem onClick={() => navigate('/car/filter/shoes')}>Shoes</ProductItem>
      </ProductNavigationPanel>
    </>
  );
}

export default Header;
