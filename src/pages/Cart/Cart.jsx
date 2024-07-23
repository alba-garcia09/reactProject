import { createContext, } from 'react';
import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';
import { useCartContext, } from '../../contexts/CartContext';

export const CartContext = createContext();

const Cart = () => {
  localStorage.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYUB0ZXN0LmNvbSIsImlhdCI6MTcyMTQwODYwNiwiZXhwIjoxNzIxNDk1MDA2fQ.QgitcsD-hXm_xo0qMRL6_wFtbePD7iMIEmXTFhzSIkk";
  const { cart, addToCart, removeFromCart, updateQuantity, selectToBuy } = useCartContext()

  const handleCheckout = () => {
    // Lógica para proceder al pago
    console.log('Proceder al pago');
  };

  const total = cart
    .filter(item => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  function add() {
    const product = {
      _id: 'inventado',
      type: "Shirt",
      color: "White",
      name: "White-Shirt",
      price: 50,
      stock: 22,
      description: "Inventado",
      quantity: 1,
      id: 3,
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1691675073-M1205R_01_b1_s3_a1_1_m94.jpg?crop=1.00xw:0.668xh;0,0.141xh&resize=980:*"
    }
    addToCart({ product })
  }
  return (
    <div className='container-fluid'>
      <h1>Tu Carrito</h1>
      <i class="bi bi-arrow-left-square"></i>
      <i class="bi bi-bag"></i>
      <i class="bi bi-bag-check"></i>
      <i class="bi bi-bag-dash"></i>
      <i class="bi bi-bag-plus"></i>
      <i class="bi bi-bag-x"></i>
      <i class="bi bi-bookmark"></i>
      <i class="bi bi-box-seam"></i>
      <i class="bi bi-cart"></i>
      <i class="bi bi-cash"></i>
      <i class="bi bi-cash-stack"></i>
      <i class="bi bi-credit-card"></i>
      <i class="bi bi-currency-bitcoin"></i>
      <i class="bi bi-currency-dollar"></i>
      <i class="bi bi-currency-euro"></i>
      <i class="bi bi-currency-pound"></i>
      <i class="bi bi-currency-rupee"></i>
      <i class="bi bi-currency-yen"></i>
      <i class="bi bi-dash-square"></i>
      <i class="bi bi-database"></i>
      <i class="bi bi-envelope"></i>
      <i class="bi bi-folder"></i>
      <i class="bi bi-hand-thumbs-up"></i>
      <i class="bi bi-hand-thumbs-down"></i>
      <i class="bi bi-heart"></i>
      <i class="bi bi-info-square"></i>
      <i class="bi bi-person"></i>
      <i class="bi bi-person-check"></i>
      <i class="bi bi-pin-map"></i>
      <i class="bi bi-plus-circle"></i>
      <i class="bi bi-plus-square"></i>
      <i class="bi bi-question-square"></i>
      <i class="bi bi-shop"></i>
      <i class="bi bi-toggle-on"></i>
      <i class="bi bi-toggle-off"></i>
      <i class="bi bi-trash3"></i>
      <i class="bi bi-wallet"></i>
      <i class="bi bi-wallet2"></i>
      <i class="bi bi-x-square"></i>
      <i class="bi bi-zoom-in"></i>
      <i class="bi bi-zoom-out"></i>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8">
          <div className="cart">
            <button onClick={add}>Añadir</button>
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
                onSelect={selectToBuy}
              />
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <CartSummary total={total} onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default Cart;