import { convertPrice } from '../utils/CurrencyUtils';
import React, { useState } from 'react';

const currencyIcons = {
  BTC: <i className="bi bi-currency-bitcoin"></i>,
  USD: <i className="bi bi-currency-dollar"></i>,
  EUR: <i className="bi bi-currency-euro"></i>,
  GBP: <i className="bi bi-currency-pound"></i>,
  INR: <i className="bi bi-currency-rupee"></i>,
  JPY: <i className="bi bi-currency-yen"></i>,
};

const CartItem = ({ item, onRemove, onUpdateQuantity, onSelect, currency }) => {

  const convertedPrice = convertPrice(item.price, 'USD', currency);
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="cart-item">

      <div className="cart-item-select" onClick={() => onSelect(item._id)} style={{ cursor: 'pointer' }}>
        {item.selected ? (
          <i className="bi bi-toggle-on"></i>
        ) : (
          <i className="bi bi-toggle-off"></i>
        )}
      </div>

      <div
        className="cart-item-image-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <img src={item.image} alt={item.name} className="cart-item-image" />
      {isHovered && (
          <div className="cart-item-image-large-wrapper">
            <img src={item.image} alt={item.name} className="cart-item-image-large" />
          </div>
        )}
      </div>

      <div className="cart-item-name">
      <h4>{item.name}</h4>
      </div>

      <div className="cart-item-price">
      <p>{convertedPrice.toFixed(2)} {currencyIcons[currency]}</p>
      </div>

      <div className="cart-item-quantity">
        <button
          onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <i class="bi bi-bag-dash"></i>
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
          disabled={item.quantity >= item.stock}
        >
          <i class="bi bi-bag-plus"></i>
        </button>
      </div>


        <button className="cart-item-button" onClick={() => onRemove(item._id)}>
          <i className="bi bi-trash"></i>
        </button>

    </div>
  );
};

export default CartItem;