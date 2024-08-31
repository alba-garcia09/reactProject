import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Logo from '../../assets/whiteLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Basic from '../../assets/clothes/Styles/basic.jpg';
import Elegant from '../../assets/clothes/Styles/elegant.jpg';
import Sporty from '../../assets/clothes/Styles/sporty.jpg';
import Streetwear from '../../assets/clothes/Styles/streetwear.jpg';
import Trendy from '../../assets/clothes/Styles/trendy.jpg';
import Summer from '../../assets/clothes/Styles/summer.jpg';


const ColorBanner = styled.div`
  width: 100%;
  background-color: var(--secundaryColor);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const WhiteBanner = styled.div`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StylesBanner = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NewsBanner = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const CheapestClothesBanner = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 200px;
`;

const InspirationBanner = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 500px;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const MyLogo = styled.img`
  height: auto;
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const MyProduct = styled.img`
  height: auto;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const MyBigProduct = styled.img`
  height: auto;
  width: 100%;
`;

const ProductSeet = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  h2 {
    margin-bottom: 20px;
  }
`;

const BigProductSeet = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${OverlayContainer} {
    opacity: 1;
  }
`;

const ResponsiveCarousel = styled(Carousel)`
  @media (max-width: 768px) {
    .carousel .slide {
      display: flex;
      justify-content: center;
    }
  }
`;

const ProductsBanner = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px;
`;


function Home() {
  const navigate = useNavigate();
  const { data: lastClothes, getData: getLastClothes, error: lastClothesError, isLoading: lastClothesLoading } = useApi();
  const { data: cheapestClothes, getData: getCheapestClothes, error: cheapestClothesError, isLoading: cheapestClothesLoading } = useApi();
  const { data: allClothes, getData: getAllClothes, error: allClothesError, isLoading: allClothesLoading } = useApi();


  const styleImages = [
    { name: 'Streetwear', image: Streetwear },
    { name: 'Elegant', image: Elegant },
    { name: 'Sporty', image: Sporty },
    { name: 'Summer', image: Summer },
    { name: 'Basic', image: Basic },
    { name: 'Trendy', image: Trendy },
  ];

  useEffect(() => {
    getLastClothes({ route: `clothes/lastClothes` });
    getCheapestClothes({ route: `clothes/cheapestClothes` });
    getAllClothes({ route: `clothes/all` });
  }, []);

  if (lastClothesLoading || cheapestClothesLoading || allClothesLoading) {
    return <div>Loading...</div>;
  }

  if (lastClothesError || cheapestClothesError || allClothesError) {
    return <div>Error: {lastClothesError?.message || cheapestClothesError?.message || allClothesError?.message}</div>;
  }

  const handleProductClick = (id) => {
    navigate(`/productDetail/${id}`);
  };

  const handleSpotifyClick = () => {
    window.location.href = 'https://open.spotify.com/playlist/37i9dQZEVXbNFJfN1Vw8d9';
  };


  const allTypesArray = [];

  if (allClothes && Array.isArray(allClothes)) {
    const allTypes = allClothes.map((item) => item.type);

    allTypes.forEach((type) => {
      if (!allTypesArray.includes(type)) {
        allTypesArray.push(type);
      }
    });
  }

  return (
    <>
      <StylesBanner>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay={true}
          centerMode
          centerSlidePercentage={33.33}
          emulateTouch
          swipeable
        >
          {styleImages.map((item, index) => (
            <BigProductSeet key={index}>
              <MyBigProduct src={item.image} alt={item.name} />
              <OverlayContainer>
                <h2>{item.name}</h2>
                <button>Ir a estilo</button>
              </OverlayContainer>
            </BigProductSeet>
          ))}
        </Carousel>
      </StylesBanner>

      <WhiteBanner>
        <TextContainer>
          <h2>Adelántate a las últimas tendencias y ofertas exclusivas</h2>
          <p>Suscríbete ahora y recibe lo último en moda y consejos directo a tu email.</p>
          <button className="blackButton" style={{ margin: '20px' }} onClick={() => navigate('/?')}>
            Suscríbete
          </button>
        </TextContainer>
      </WhiteBanner>

      <NewsBanner>
        <h1>Novedades</h1>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay={true}
          centerMode
          centerSlidePercentage={33.33}
          emulateTouch
          swipeable
        >
          {lastClothes && lastClothes.map((item, index) => (
            item.image && item.image[0] && (
              <ProductSeet key={index} onClick={() => handleProductClick(item._id)}>
                <MyProduct src={item.image[0]} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price}€</p>
              </ProductSeet>
            )
          ))}
        </Carousel>
      </NewsBanner>

      <ColorBanner>
        <TextContainer>
          <p>Hasta un</p>
          <h2>20% de descuento</h2>
        </TextContainer>
      </ColorBanner>

      <CheapestClothesBanner>
        <LogoContainer>
          <h1>Nuestras gangas</h1>
        </LogoContainer>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay={true}
          centerMode
          centerSlidePercentage={33.33}
          emulateTouch
          swipeable
        >
          {cheapestClothes && cheapestClothes.map((item, index) => (
            item.image && item.image[1] && (
              <ProductSeet key={index} onClick={() => handleProductClick(item._id)}>
                <MyProduct src={item.image[1]} alt={item.name} />
                <h3>{item.name}</h3>
                <p style={{ color: 'red' }}>{item.price}€</p>
              </ProductSeet>
            )
          ))}
        </Carousel>
      </CheapestClothesBanner>

      <ColorBanner>
        <TextContainer>
          <p>Hemos creado una lista para ti</p>
          <button className="blackButton" onClick={handleSpotifyClick}>Accede a nuestra lista</button>
        </TextContainer>
      </ColorBanner>

      <ProductsBanner>
        <h1>Nuestros productos</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {allTypesArray.map((type, index) => (
            <p onClick={() => navigate(`/products/type?${type}`)} key={index} style={{ margin: '5px 0' }}>
              {type}
            </p>
          ))}
        </div>
        <button style={{ margin: '20px 0px 0px 0px' }} className="blackButton" onClick={() => navigate('/products')}>Quiero conocerlos todos</button>
        <></>
      </ProductsBanner>

      <InspirationBanner>
        <LogoContainer>
          <MyLogo src={Logo} alt="Logo" />
          <h1>community</h1>
        </LogoContainer>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay={true}
          centerMode
          centerSlidePercentage={33.33}
          emulateTouch
          swipeable
        >
          {cheapestClothes && cheapestClothes.map((item, index) => (
            item.image && item.image[1] && (
              <ProductSeet key={index}>
                <MyProduct src={item.image[1]} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price}€</p>
              </ProductSeet>
            )
          ))}
        </Carousel>
        <p>¡Inspírate y comparte tus looks Alpal utilizando el hashtag #alpalcommunity y mencionando @alpal!</p>
      </InspirationBanner>

      <WhiteBanner>
        <TextContainer>
          <p>Si todavía no tienes cuenta</p>
          <h2>no te lo pienses más</h2>
          <button className="blackButton" style={{ margin: '20px' }} onClick={() => navigate('/register')}>
            Regístrate
          </button>
        </TextContainer>
      </WhiteBanner>
    </>
  );
}

export default Home;
