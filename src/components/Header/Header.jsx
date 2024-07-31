import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/whiteLogo.png';

const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    height: 80%;
    margin: 0 10px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="row w-100">
          <div className="col-12 col-md-2">
            <LogoContainer>
              <img src={Logo} alt="Logo" />
            </LogoContainer>
          </div>
          <div className="col-12 col-md-5 d-none d-md-flex">
            <SearchBar>
              <input type="text" placeholder="Buscar..." className="form-control" />
            </SearchBar>
          </div>
          <div className="col-12 col-md-2 d-none d-md-flex">
            <LogoContainer>
              <img src={Logo} alt="Icon 1" />
              <img src={Logo} alt="Icon 2" />
            </LogoContainer>
          </div>
          <div className="col-12 d-flex d-md-none justify-content-end">
            <LogoContainer>
              <img src={Logo} alt="Icon 3" />
            </LogoContainer>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;


// import React from 'react';
// import styled from 'styled-components';
// import Logo from '../../assets/whiteLogo.png';

// const Container = styled.header`
//   width: 100vw;
//   height: 10vh;
//   background-color: black;
//   color: white;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 5px 50px;
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   height:100%;

// `;

// const SearchBar = styled.div`
//   display: flex;
//   align-items: center;
// `;

// function Header() {
//   return (
//     <Container className="row">
//       <LogoContainer className="col-12 col-md-3 col-sm-5">
//         <img src={Logo} alt="Logo" />
//       </LogoContainer>

//       <LogoContainer className="col-12 d-md-none col-sm-2">
//         <img src={Logo} alt="lupa" />
//       </LogoContainer>

//       <SearchBar className="col-12 col-md-3 d-sm-none">
//         <input type="text" placeholder="Buscar..." className="form-control" />
//       </SearchBar>
//       <LogoContainer className="col-12 col-md-3 col-sm-5">
//         <img src={Logo} alt="Logo" />
//         </LogoContainer>
//     </Container>
//   );
// }

// export default Header;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import Logo from '../../assets/whiteLogo.png';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Container = styled.header`
//   width: 100vw;
//   height: 10vh;
//   background-color: black;
//   color: white;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding:5px 50px 5px 50px ;
// `;

// function Header() {
//   // const navigate = useNavigate();
//   // const [search, setSearch] = useState('');
//   return (
//     <>
//       <Container>
//         <div className="col-12 col-lg-2">
//           <img src={Logo} alt="Logo" style={{ height: '80%' }} />
//         </div>

//         <div className="col-12 col-lg-8">
//           <p>aqui el boton de busqueda</p>
//         </div>

//         <div className="col-12 col-lg-2">
//         <i class="bi bi-person"></i>
//         <i class="bi bi-cart"></i>
//         </div>
//       </Container>

//     </>
//   )
// }

// export default Header;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Logo from '../../assets/whiteLogo.png';
// // import MyButton from '../ButtonInHeader/MyButton.js';
// import styled from 'styled-components';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const HeaderStyled = styled.header`
//   width: 100vw;
//   height: 10vh;
//   background-color: black;
//   color: white;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 50px;
//   box-sizing: border-box;
//   position: relative; /* Add position relative for absolute positioning of the panel */
// `;

// const ProductNavigationPanel = styled.div`
//   width: 100vw; /* 100% del ancho de la ventana gráfica */
//   height: 7.5vh; /* 1% de la altura de la ventana gráfica */
//   background-color: #0A3E27;
//   color: white
//   display: flex;
//   align-items: center;
//   padding: 20px 50px; /* Adjust padding */
//   box-sizing: border-box;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 10px;
// `;

// const Icon = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// const InputContainer = styled.div`
//   position: relative;
//   flex-grow: 1;
//   margin: 0 20px;
//   padding: 10px 0;
// `;

// const InputStyled = styled.input`
//   width: 100%;
//   height: 30px;
//   padding: 5px 30px 5px 10px;
//   font-size: 16px;
//   box-sizing: border-box;
//   border-radius: 15px;
//   border: 1px solid #ccc;
// `;

// const SearchIconStyled = styled.img`
//   position: absolute;
//   right: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 20px;
//   height: 20px;
//   cursor: pointer;
// `;

// const ProductItem = styled.li`
//   margin: 0 10px;
//   cursor: pointer;
//   list-style-type: none; /* Remove default list style */
// `;

// function Header() {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState('');

//   return (
//     <>
//       <HeaderStyled>
//         <Logo />

//         <InputContainer>
//           <InputStyled
//             placeholder="Buscar..."
//             onChange={(event) => setSearch(event.target.value)}
//           />
//           <SearchIconStyled
//             src={<i class="bi bi-search"></i>}
//             alt="Search"
//             onClick={() => navigate(`/filter/${search}`)}
//           />
//         </InputContainer>
//         <ButtonContainer>
//           <MyButton>
//             <Icon
//               src={<i class="bi bi-person"></i>}
//               alt="Register"
//               onClick={() => navigate('/register')}
//             />
//           </MyButton>
//           <MyButton>
//             <Icon
//               src={<i class="bi bi-cart"></i>}
//               alt="Cart"
//               onClick={() => navigate('/cart')}
//             />
//           </MyButton>
//         </ButtonContainer>
//       </HeaderStyled>

//       <ProductNavigationPanel>
//         <ProductItem onClick={() => navigate('/car/filter/shirt')} >Shirt</ProductItem>
//         <ProductItem onClick={() => navigate('/car/filter/jeans')}>Jeans</ProductItem>
//         <ProductItem onClick={() => navigate('/car/filter/skirt')}>Skirt</ProductItem>
//         <ProductItem onClick={() => navigate('/car/filter/socks')}>Socks</ProductItem>
//         <ProductItem onClick={() => navigate('/car/filter/shoes')}>Shoes</ProductItem>
//       </ProductNavigationPanel>
//     </>
//   );
// }

// export default Header;