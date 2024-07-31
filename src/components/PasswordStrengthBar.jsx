import React from 'react';
import styled, { keyframes } from 'styled-components';

const strengthAnimation = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const BarContainer = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ddd;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

const StrengthBar = styled.div`
  height: 100%;
  border-radius: 4px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  animation: ${strengthAnimation} 0.5s ease-in-out;
`;

const PasswordStrengthBar = ({ strength }) => {
  let color = '#ddd';
  let width = '0%';

  switch (strength) {
    case 'strong':
      color = 'green';
      width = '100%';
      break;
    case 'medium':
      color = 'orange';
      width = '60%';
      break;
    case 'weak':
      color = 'red';
      width = '30%';
      break;
    default:
      break;
  }

  return (
    <BarContainer>
      <StrengthBar width={width} color={color} />
    </BarContainer>
  );
};

export default PasswordStrengthBar;
