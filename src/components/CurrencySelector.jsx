import React, { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';

export const currencySymbols = {
  USD: <i className="bi bi-currency-dollar"></i>,
  EUR: <i className="bi bi-currency-euro"></i>,
  GBP: <i className="bi bi-currency-pound"></i>,
  INR: <i className="bi bi-currency-rupee"></i>,
  JPY: <i className="bi bi-currency-yen"></i>,
  BTC: <i className="bi bi-currency-bitcoin"></i>,
};

export const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  INR: 74,
  JPY: 110,
  BTC: 0.000022,
};

export const convertPrice = (price, fromCurrency, toCurrency) => {
  const fromRate = exchangeRates[fromCurrency];
  const toRate = exchangeRates[toCurrency];
  return (price / fromRate) * toRate;
};

const CurrencySelector = () => {
  const { currency, setCurrency } = useCartContext();
  const [showModal, setShowModal] = useState(false);

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    setShowModal(false);
  };

  return (
    <div className="currency-selector">
      <button className="main-button" onClick={() => setShowModal(true)}>
        {currencySymbols[currency]}
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Selecciona la Divisa</h2>
            <ul className="currency-list">
              {Object.keys(currencySymbols).map(curr => (
                <li key={curr} onClick={() => handleCurrencyChange(curr)}>
                  {currencySymbols[curr]} {curr}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;