// cambio
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled components
const BarContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: ${props => props.color};
  transition: width 0.5s ease;
`;

const StrengthLabel = styled.p`
  margin-top: 0.5rem;
  font-weight: bold;
  color: ${props => props.color};
`;

// Strength levels
const strengthLevels = {
  weak: { color: 'red', text: 'Débil' },
  medium: { color: 'orange', text: 'Medio' },
  strong: { color: 'green', text: 'Fuerte' },
};

// PasswordStrengthBar Component
const PasswordStrengthBar = ({ strength }) => {
  const strengthLevel = strengthLevels[strength] || strengthLevels.weak;

  return (
    <BarContainer>
      <ProgressBar
        color={strengthLevel.color}
        initial={{ width: '0%' }}
        animate={{ width: strength === 'weak' ? '33%' : strength === 'medium' ? '66%' : '100%' }}
      />
      <StrengthLabel color={strengthLevel.color}>{strengthLevel.text}</StrengthLabel>
    </BarContainer>
  );
};

export default PasswordStrengthBar;
