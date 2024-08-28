import { useCartContext } from '../contexts/CartContext';
import { convertPrice } from '../utils/CurrencyUtils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const currencyIcons = {
  BTC: <i className="bi bi-currency-bitcoin"></i>,
  USD: <i className="bi bi-currency-dollar"></i>,
  EUR: <i className="bi bi-currency-euro"></i>,
  GBP: <i className="bi bi-currency-pound"></i>,
  INR: <i className="bi bi-currency-rupee"></i>,
  JPY: <i className="bi bi-currency-yen"></i>,
};

const CartSummary = () => {
  const { cart, currency, checkout } = useCartContext();
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const selectedItems = cart.filter(item => item.selected);
  const totalWithoutDiscount = selectedItems.reduce((acc, item) => acc + (convertPrice(item.price, 'USD', currency) * item.quantity), 0);

  // Función para aplicar el descuento
  const applyDiscount = (total, discountCode) => {
    let discount = 0;
    if (discountCode === 'DISCOUNT10') {
      discount = total * 0.10; // 10% de descuento
    }
    return discount;
  };

  // Manejar la aplicación del código de descuento
  const handleApplyDiscount = () => {
    const discount = applyDiscount(totalWithoutDiscount, discountCode);
    setDiscountAmount(discount);
  };

  const totalWithDiscount = totalWithoutDiscount - discountAmount;

  return (
    <>
      <div className="cart-summary">
        <h2>Resumen del Carrito</h2>
        <ul className="list-group mb-3">
          {selectedItems.map(item => (
            <div key={item.id} className="cart-summary-item">
              <span>{item.name} x {item.quantity}</span>
              <span>{(convertPrice(item.price, 'USD', currency).toFixed(2) * item.quantity).toFixed(2)} {currencyIcons[currency]}</span>
            </div>
          ))}
        </ul>
        <div className="discount-section">
          <input
            type="text"
            placeholder="Código de descuento"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="form-control mb-2"
          />
          <button onClick={handleApplyDiscount} className="btn btn-primary">Aplicar Descuento</button>
        </div>
        {discountAmount > 0 && (
          <div className="discount-info">
            <p>Descuento aplicado: -{discountAmount.toFixed(2)} {currencyIcons[currency]}</p>
          </div>
        )}
        <h4>Total: {totalWithDiscount.toFixed(2)} {currencyIcons[currency]}</h4>
        <Link to="/checkout" className="main-button" onClick={checkout}>Proceder al Pago</Link>
      </div>
    </>
  );
};

export default CartSummary;