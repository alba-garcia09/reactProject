import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useApi from '../hooks/useApi';
import PasswordStrengthBar from './PasswordStrengthBar';
import { evaluatePasswordStrength } from '../utils/passwordStrength';

// Estilos para los componentes
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #0A3E27;
  border-radius: 8px;
  background-color: #E2D1BF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #0A3E27;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #0A3E27;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #0A3E27;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #CC88FF;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #AA66CC;
  }
`;

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cash, setCash] = useState('');
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(''); // Initially empty
  const { postData, isLoading, data } = useApi();
  const navigate = useNavigate();

  useEffect(()=>{
    if(data?.token){
      navigate('/home');
    }
  }, [data])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordStrength === 'weak') {
      setError('La contraseña es demasiado débil.');
      return;
    }

    try {
      postData({
        route: 'auth/register',
        body: { name, email, password, role: 'client', cash },
      });

    } catch (err) {
      console.error('Error during registration:', err);
      setError('Error during registration.');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(evaluatePasswordStrength(newPassword));
  };

  return (
    <Container>
      <Title>Registrarse</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nombre:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Correo Electrónico:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <PasswordStrengthBar strength={passwordStrength} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cash">Dinero Inicial:</Label>
          <Input
            type="number"
            id="cash"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            required
          />
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Cargando...' : 'Registrarse'}
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
