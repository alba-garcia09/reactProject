import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { ticket, movements } = location.state || {}; // Asegúrate de manejar un estado undefined

  console.log('Ticket:', ticket);
  console.log('Movement:', movements);

  if (!ticket || !movements) {
    return <p>No data available. Please go back and try again.</p>;
  }
  return (
    <div className="success">
      <h2>Payment Successful!</h2>
      <div className="ticket">
        <h3>Your Ticket</h3>
        <pre>{JSON.stringify(ticket, null, 2)}</pre> {/* Muestra el ticket de manera legible */}
      </div>
      <div className="movement">
        <h3>Transaction Details</h3>
        <pre>{JSON.stringify(movements, null, 2)}</pre> {/* Muestra el movimiento */}
      </div>
    </div>
  );
};

export default Success;