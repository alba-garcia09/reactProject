// cambio
import styled from 'styled-components';

// Password strength bar container
const BarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  position: relative;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center; // Centers text within the container
`;

// Password strength bar
const Bar = styled.div`
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s ease, background-color 0.3s ease;
  background-color: ${({ strength }) => {
    switch (strength) {
      case 'strong': return '#4caf50'; // Green
      case 'medium': return '#ffeb3b'; // Yellow
      case 'weak': return '#f44336'; // Red
      default: return '#e0e0e0'; // Light gray
    }
  }};
  width: ${({ strength }) => {
    switch (strength) {
      case 'strong': return '100%'; // 100% for strong password
      case 'medium': return '66%';  // 66% for medium password
      case 'weak': return '33%';    // 33% for weak password
      default: return '10%';        // Initially small
    }
  }};
`;

const PasswordStrengthBar = ({ strength }) => (
  <BarContainer>
    <Bar strength={strength} />
    {/* Text indicating the strength */}
    <span style={{ position: 'absolute', width: '100%', textAlign: 'center', color: '#000' }}>
      {strength.charAt(0).toUpperCase() + strength.slice(1)}
    </span>
  </BarContainer>
);

export default PasswordStrengthBar;
