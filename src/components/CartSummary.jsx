const CartSummary = ({ total, onCheckout }) => {
  return (
    <>
      <div className="cart-summary">
        <h2>Resumen del Carrito</h2>
        <p>Total: {total} $</p>
        <button onClick={onCheckout}>Proceder al Pago</button>
      </div>
    </>
  );
};

export default CartSummary;