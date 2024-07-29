import React, { useEffect, useState } from 'react';

const Checkout = () => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('checkoutItems')) || [];
    setCheckoutItems(items);
  }, []);

  const handlePayment = () => {
    // Aquí iría la lógica para procesar el pago
    console.log('Procesando el pago...');
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-items">
        <h3>Checkout</h3>
        {checkoutItems.map(item => (
          <div key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
      <form className="payment-form">
        <div>
          <label>Nombre:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Tarjeta de Crédito:</label>
          <input type="text" required />
        </div>
        <button type="button" onClick={handlePayment}>Proceder al Pago</button>
      </form>
    </div>
  );
};

export default Checkout;