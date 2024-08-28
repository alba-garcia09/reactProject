import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import usePostApi from '../../hooks/usePostApi';

const Checkout = () => {
  const { cart } = useCartContext();
  const { data, postData, error, isLoading } = usePostApi();
  const navigate = useNavigate();

  const selectedItems = cart.filter(item => item.selected);

  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleShippingChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    // Aquí podrías añadir validación de los datos antes de proceder
    const payload = {
      items: selectedItems.map(item => ({
        id: item._id,
        // name: item.name,
        quantity: item.quantity,
        // price: item.price,
      })),
      // shippingDetails,
      // paymentDetails,
    };

    console.log(payload.items);
    postData({ route: 'buy', payload: payload.items});
  };

  useEffect(() => {
    if (data) {
      // Navegar a una página de éxito o mostrar un mensaje de éxito
      navigate('/success', { state: { ticket: data.ticket, movement: data.movement }});
    }
  }, [data, navigate]);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-section">
        <h3>Shipping Details</h3>
        <form>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={shippingDetails.fullName}
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingDetails.address}
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingDetails.city}
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={shippingDetails.postalCode}
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingDetails.country}
            onChange={handleShippingChange}
          />
        </form>
      </div>

      <div className="checkout-section">
        <h3>Payment Details</h3>
        <form>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentDetails.cardNumber}
            onChange={handlePaymentChange}
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date (MM/YY)"
            value={paymentDetails.expiryDate}
            onChange={handlePaymentChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={paymentDetails.cvv}
            onChange={handlePaymentChange}
          />
        </form>
      </div>

      <div className="checkout-total">
        <h3>Total: {selectedItems.reduce((total, item) => total + item.price * item.quantity, 0)} $</h3>
      </div>

      <button className="main-button" onClick={handleCheckout} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Proceed to Payment'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Checkout;