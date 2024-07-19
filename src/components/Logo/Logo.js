import styled from 'styled-components';
import Logo from '../../assets/asos+logo+white.png'; // Asegúrate de que la ruta sea correcta

const MyLogo = styled.div`
  background-image: url(${Logo});
  width: 100px; /* Establece el ancho del contenedor */
  height: 30px; /* Establece la altura del contenedor */
  background-size: cover; /* Ajusta la imagen para que cubra todo el contenedor */
  background-position: center; /* Centra la imagen */
  margin-right: 20px;
`;

export default MyLogo;
