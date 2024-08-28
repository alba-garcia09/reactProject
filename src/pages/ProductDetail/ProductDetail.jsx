import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : 'auto')};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  overflow-y: auto;
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
  justify-content:space-evenly;
  gap:40px;
`;

const ProductPhotoColumn = styled.div`

  max-height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsColumn = styled.div`
  /* padding: 25px; */
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: left;
`;

const ProductImage = styled.img`
  max-width: -webkit-fill-available;
  max-height: 100%;
  cursor: pointer;
`;

const Arrow = styled.div`
  position:absolute;
  top:50%;
  right:10%;

  font-size: 24px;
  color: black;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #ddd;
  }
`;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
`;

const ModalImage = styled.img`
  max-height: 80vh;
  width: auto;
`;

const ModalArrow = styled(Arrow)`
  color: white;
  right: 20px;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ColorIndicator = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => color || 'grey'};
  margin-left: 10px;
`;

const transformRowUrl = (rowUrl) => {
  const splitedRowUrl = rowUrl.split('/');
  const imgId = splitedRowUrl[5];
  const url = `https://drive.google.com/thumbnail?id=${imgId}&sz=w1000`;
  return url;
};

const ProductDetail = () => {
  const { id } = useParams();
  const { data, getData, error, isLoading } = useApi();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState('');
  // const {cartContext, setCartContext } = useCartContext();

  useEffect(() => {
    getData({ route: `clothes/byId/${id}` });
  }, []);

  useEffect(() => {
    if (data && data.image.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [data]);

  const handleNextImage = () => {
    if (data && data.image.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.image.length);
    }
  };

  const handlePrevImage = () => {
    if (data && data.image.length > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + data.image.length) % data.image.length
      );
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClick = () => {
    setIsModalOpen(false);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  // const handleContext = () => {
  //   setCartContext(data);
  // };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <GlobalStyle isModalOpen={isModalOpen} />
      <Container>
        <ProductDetails className="container">
          <ProductPhotoColumn className="col-12 col-lg-5">
            {data && data.image.length > 0 && (
              <>
                <ProductImage
                  src={transformRowUrl(data.image[currentImageIndex])}
                  alt={data.name}
                  onClick={handleImageClick}
                />
                {data.image.length > 1 && (
                  <>
                    <Arrow onClick={handleNextImage}>→</Arrow>
                    <Arrow onClick={handleNextImage} style={{ top: '50%', left: '10%' }}>←</Arrow>
                  </>
                )}
              </>
            )}
          </ProductPhotoColumn>
          <DetailsColumn className="col-12 col-lg-5">
            {data && (
              <>
                <div>
                  <h1>{data.name}</h1>
                  <p>{data.description}</p>
                </div>

                <h2>{data.price}€</h2>

                <ColorContainer>
                  <p>Color:</p>
                  <ColorIndicator color={data.color} />
                </ColorContainer>


                <select value={size} onChange={handleSizeChange} className="form-control mb-3">
                  <option value="">Seleccione una talla</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>

                <div>
                  <p><i className="bi bi-truck" style={{ marginRight: '10px' }}></i> Envío gratis en los pedidos que se indique</p>
                  <p><i className="bi bi-bag-check" style={{ marginRight: '10px' }}></i> Devoluciones gratis</p>
                  <p className='littleText'>Consulta las condiciones aqui</p>
                </div>

                <button>Añadir al carrito</button>
              </>
            )}
          </DetailsColumn>
        </ProductDetails>

        <Modal isOpen={isModalOpen} onClick={handleModalClick}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage
              src={data ? transformRowUrl(data.image[currentImageIndex]) : ''}
              alt={data ? data.name : ''}
            />
            {data && data.image.length > 1 && (
              <>
                <ModalArrow onClick={handleNextImage}>→</ModalArrow>
                <ModalArrow onClick={handlePrevImage} style={{ right: 'auto', left: '20px' }}>←</ModalArrow>
              </>
            )}
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default ProductDetail;
