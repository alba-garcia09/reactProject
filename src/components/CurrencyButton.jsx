import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCartContext } from '../contexts/CartContext';

const CurrencyButton = () => {
  const { changeCurrency, currency } = useCartContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currencies = ["USD", "EUR", "GBP", "INR", "JPY", "BTC"];

  const currencyIcons = {
    BTC: <i className="bi bi-currency-bitcoin"></i>,
    USD: <i className="bi bi-currency-dollar"></i>,
    EUR: <i className="bi bi-currency-euro"></i>,
    GBP: <i className="bi bi-currency-pound"></i>,
    INR: <i className="bi bi-currency-rupee"></i>,
    JPY: <i className="bi bi-currency-yen"></i>,
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {currency} {currencyIcons[currency]}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currencies.map(cur => (
            <Button key={cur} variant="secondary" onClick={() => { changeCurrency(cur); handleClose(); }} style={{ margin: '5px' }}>
              {cur}
            </Button>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CurrencyButton;