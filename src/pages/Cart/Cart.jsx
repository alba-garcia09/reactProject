import { createContext, useEffect, } from 'react';
import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';
import { useCartContext, } from '../../contexts/CartContext';
import CurrencyButton from '../../components/CurrencyButton';

export const CartContext = createContext();

const Cart = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, selectToBuy, currency, setCart } = useCartContext()


  return (
    <div className='container-fluid'>
      <h1>Tu Carrito</h1>
      <CurrencyButton />
      <div className="row">
        <div className="col-12 col-md-8 col-lg-7">
          <div className="cart">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item} // Si `selected` es `undefined`, se establece como `true`
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
                onSelect={selectToBuy}
                currency={currency}
              />
            ))}
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-5">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;