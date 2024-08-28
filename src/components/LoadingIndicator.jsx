import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the spin animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Style the loader component
const Loader = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #0A3E27; /* Dark green */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
`;

// LoadingIndicator component
const LoadingIndicator = () => {
  return <Loader />;
};

export default LoadingIndicator;
