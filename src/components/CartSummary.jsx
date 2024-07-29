import { useCartContext } from '../contexts/CartContext';
import { convertPrice } from '../utils/CurrencyUtils';
import { Link } from 'react-router-dom';


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

  const selectedItems = cart.filter(item => item.selected);
  const total = selectedItems.reduce((acc, item) => acc + (convertPrice(item.price, 'USD', currency) * item.quantity), 0);

  return (
    <>
      <div className="cart-summary">
        <h2>Resumen del Carrito</h2>
        <ul className="list-group mb-3">
          {selectedItems.map(item => (
            <div key={item.id} className="cart-summary-item">
              <span>{item.name} x {item.quantity}</span>
              <span>{(convertPrice(item.price, 'USD', currency).toFixed(2))*item.quantity} {currencyIcons[currency]}</span>
            </div>
          ))}
        </ul>
        <h4>Total: {total.toFixed(2)} {currencyIcons[currency]}</h4>
        <Link to="/checkout" className="btn btn-primary" onClick={checkout}>Proceder al Pago</Link>
      </div>
    </>
  );
};

export default CartSummary;
