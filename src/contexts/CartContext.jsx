import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("USD");

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar carrito en localStorage cada vez que se actualiza
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart({ product }) {
    const newCart = [...cart];
    product.selected = true;
    newCart.push(product);
    setCart(newCart);
  }

  function removeFromCart(_id) {
    const updatedCart = cart.filter(item => item._id !== _id);
    setCart(updatedCart);
  }

  function updateQuantity(_id, quantity) {
    const updatedCart = cart.map(item =>
      item._id === _id ? { ...item, quantity: Math.max(quantity, 1) } : item
    );
    setCart(updatedCart);
  }

  function selectToBuy(_id) {
    const updatedCart = cart.map(item =>
      item._id === _id ? { ...item, selected: !item.selected } : item
    );
    setCart(updatedCart);
  }

  function changeCurrency(newCurrency) {
    setCurrency(newCurrency);
    // Opcional: guardar la moneda en localStorage
    localStorage.setItem('currency', newCurrency);
  }

  function checkout() {
    const selectedItems = cart.filter(item => item.selected);
    setCheckoutItems(selectedItems);
    navigate('/checkout');
  }

  return (
    <CartContext.Provider value={{ cart, checkoutItems, currency, addToCart, removeFromCart, updateQuantity, selectToBuy, changeCurrency, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext Hook must be used within a CartProvider");
  }
  return context;
}
